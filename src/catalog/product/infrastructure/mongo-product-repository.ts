import { injectable, inject } from "inversify";
import { MongoClient, Collection, ObjectId } from "mongodb";

import ProductRepository from "../application/product-repository";
import Product from "../domain/product";
import TYPES from "../../../container/types";

@injectable()
export default class MongoProductRepository implements ProductRepository {

    private collection: Collection;

    constructor(
        @inject(TYPES.MongoClient)
        private readonly client: MongoClient
    ) {
        this.collection = this.client.db("mydb").collection("products");
    }

    async delete(id: string): Promise<void> {
        await this.collection.deleteOne({ _id: new ObjectId(id) });
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
        const primitivesproduct = product.toPrimitives()
        const doc: any = {
            _id: primitivesproduct.id,
            name: primitivesproduct.name,
            baseUnit: primitivesproduct.baseUnit,

            presentations: (primitivesproduct.presentations || []).map((p: any) => ({
                id: p.id,
                name: p.name,
                type: p.type,
                netQuantity: p.netQuantity,
                unitOfMesure: p.unitOfMesure
            }))
            
        };
        console.log(doc.presentations, doc.presentations.type, 'doc')


        await this.collection.updateOne(
            { _id: doc._id },
            { $set: doc },
            { upsert: true }
        );
    }

    private toProduct(doc: any): Product {

        const product: any = {
            productId: { value: doc._id?.toString() },
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