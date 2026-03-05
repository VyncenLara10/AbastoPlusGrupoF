import { Container } from "inversify";
import { MongoClient } from "mongodb";

import TYPES from "./types";
import MongoProductRepository from "../catalog/product/infrastructure/mongo-product-repository";
import ProductRepository from "../catalog/product/application/product-repository";

const container = new Container();

const client = new MongoClient("mongodb://localhost:27017");

container.bind<MongoClient>(TYPES.MongoClient).toConstantValue(client);

container
  .bind<ProductRepository>(TYPES.ProductRepository)
  .to(MongoProductRepository);

export default container;