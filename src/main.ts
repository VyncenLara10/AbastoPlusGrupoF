import "reflect-metadata";
import container from "./container/container";
import TYPES from "./container/types";
import MongoProductRepository from "./catalog/product/infracstructure/mongo-product-repository";
import ProductId from './catalog/product/domain/value-objects/product-id';
import ProductName from './catalog/product/domain/value-objects/product-name';
import ProductBaseUnit from './catalog/product/domain/value-objects/product-base-unit';
import Product from './catalog/product/domain/product';
import PresentationCreator from "./catalog/product/domain/entities/presentation/presentation-creator";

async function Main() {

  console.log("Iniciando pruebas");

  const repo = container.get<MongoProductRepository>(TYPES.ProductRepository);

  const id = new ProductId("507f1f77bcf86cd799439011");
  const name = new ProductName("Comida para gato");
  const unit = new ProductBaseUnit("kg");

  const productData = {
    productId: id,
    productName: name,
    productBaseUnit: unit,
    productPresentations: PresentationCreator.createPresentations([
      {
        id: "p1",
        name: "Bolsa pequeña",
        type: "Bolsa",
        netQuantity: 1,
        unitOfMesure: "Kg"
      },
      {
        id: "p2",
        name: "Bolsa mediana",
        type: "Bolsa",
        netQuantity: 5,
        unitOfMesure: "Kg"
      },
      {
        id: "p3",
        name: "Bolsa grande",
        type: "Bolsa",
        netQuantity: 10,
        unitOfMesure: "Kg"
      }
    ])
  } as unknown as Product;

  await repo.save(productData);

  const allProducts = await repo.findAll();
  console.log(allProducts);

}

Main();