import ProductRepository from "../application/product-repository";
import Product from "../domain/product";
import { MongoClient, Collection, ObjectId } from "mongodb";


export class MongoProductRepository implements ProductRepository {
  private collection: Collection;

  constructor(private readonly client: MongoClient) {
    this.collection = this.client.db("mydb").collection("products");
  }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<Product[]> {
    const docs = await this.collection.find().toArray();
    return docs.map(this.toProduct);
  }

    async findById(id: string): Promise<Product | null> {
    const doc = await this.collection.findOne({ _id: new ObjectId(id) });
    return doc ? this.toProduct(doc) : null;
  }

    async save(product: Product): Promise<void> {
    const productAny = product as any;
    const doc = {
      _id: new ObjectId(productAny.productId.value),
      name: productAny.productName.value,
      baseUnit: productAny.productBaseUnit.value,
      presentations: (productAny.productPresentations || []).map((p: any) => ({
        id: p.presentationId.value,
        name: p.presentationName.value,
        type: p.presentationType.value,
        netQuantity: p.presentationNetQuantity.value,
        unitOfMesure: p.presentationUnitOfMesure.value
      }))
    };
    await this.collection.updateOne({ _id: doc._id }, { $set: doc }, { upsert: true });
  }

  private toProduct(doc: any): Product {
   const product: any = {
      productId: { value: doc._id ? doc._id.toString() : undefined },
      productName: { value: doc.name },
      productBaseUnit: { value: doc.baseUnit },
      productPresentations: (doc.presentations || []).map((p: any) => ({
        presentationId: { value: p.id },
        presentationName: { value: p.name },
        presentationType: { value: p.type },
        presentationNetQuantity: { value: p.netQuantity },
        presentationUnitOfMesure: { value: p.unitOfMesure }
      }))
    };
    return product as Product;
  }
}