import "reflect-metadata";
import container from "./container/container";
import TYPES from "./container/types";
import MongoProductRepository from "./catalog/product/infrastructure/mongo-product-repository";
import ProductId from './catalog/product/domain/value-objects/product-id';
import ProductName from './catalog/product/domain/value-objects/product-name';
import ProductBaseUnit from './catalog/product/domain/value-objects/product-base-unit';
import Product from './catalog/product/domain/product';
import PresentationCreator from "./catalog/product/domain/entities/presentation/presentation-creator";
import SaveProduct from "./catalog/product/application/use-cases/save-product";

async function Main() {

  console.log("Iniciando pruebas");

  const repo = container.get<MongoProductRepository>(TYPES.ProductRepository);

  const id = "507f1f77bcf86cd799439011";
  const name = "Comida para gato";
  const unit = "kg";
  const productPresentations = [
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
    ];
  const guardar = new SaveProduct(repo);
  await guardar.execute({
    id: id,
    name: name,
    baseUnit: unit,
    presentations: productPresentations
  });

  const allProducts = await repo.findAll();
  console.log(allProducts);

}

Main();