import { Container } from "inversify";
import { MongoClient } from "mongodb";

import TYPES from "./types";

import MongoProductRepository from "../catalog/product/infrastructure/mongo-product-repository";
import CrowdinTranslationService from "../catalog/product/infrastructure/crowdin-translator";

import SaveProduct from "../catalog/product/application/use-cases/save-product";

const container = new Container();

const client = new MongoClient("mongodb://localhost:27017");

container.bind<MongoClient>(TYPES.MongoClient).toConstantValue(client);

container.bind(TYPES.ProductRepository)
    .to(MongoProductRepository);

container.bind(TYPES.TranslationService)
    .to(CrowdinTranslationService);

container.bind(TYPES.SaveProduct).toDynamicValue((context) => {

    return new SaveProduct(
        container.get(TYPES.ProductRepository),
        container.get(TYPES.TranslationService)
    );

});

export default container;