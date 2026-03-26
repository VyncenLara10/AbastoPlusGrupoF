import { Container } from "inversify";
import { MongoClient } from "mongodb";

import TYPES from "./types";

import MongoProductRepository from "../catalog/product/infrastructure/mongo-product-repository";
import CrowdinTranslationService from "../catalog/product/infrastructure/crowdin-translator";
import { InMemoryEventBus } from "../catalog/product/infrastructure/in-memory-event-bus";

import SaveProduct from "../catalog/product/application/use-cases/save-product";
import TranslateName from "../catalog/product/application/use-cases/translate-name";

import { ProductCreatedEvent } from "../catalog/product/domain/product-created.event";

const container = new Container();

const client = new MongoClient("mongodb://localhost:27017");

container.bind<MongoClient>(TYPES.MongoClient).toConstantValue(client);

container.bind(TYPES.ProductRepository)
    .to(MongoProductRepository);

container.bind(TYPES.TranslationService)
    .to(CrowdinTranslationService);

container.bind<InMemoryEventBus>(TYPES.EventBus)
    .toConstantValue(new InMemoryEventBus());

container.bind(TYPES.TranslateName).toDynamicValue(() => {
    return new TranslateName(
        container.get(TYPES.TranslationService)
    );
});

container.bind(TYPES.SaveProduct).toDynamicValue(() => {
    const eventBus = container.get<InMemoryEventBus>(TYPES.EventBus);
    const translateName = container.get<TranslateName>(TYPES.TranslateName);

    eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, translateName);

    return new SaveProduct(
        container.get(TYPES.ProductRepository),
        eventBus,
    );
});

export default container;