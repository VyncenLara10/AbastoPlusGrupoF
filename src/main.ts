import "reflect-metadata";
import { MongoClient } from "mongodb";
import { Container } from "inversify";
import TYPES from "./container/types";
import MongoProductRepository from "./catalog/product/infrastructure/mongo-product-repository";
import { InMemoryEventBus } from "./catalog/product/infrastructure/in-memory-event-bus";
import SaveProduct from "./catalog/product/application/use-cases/save-product";

async function main() {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();

    const container = new Container();
    container.bind<MongoClient>(TYPES.MongoClient).toConstantValue(client);
    container.bind<MongoProductRepository>(TYPES.ProductRepository).to(MongoProductRepository);

    const productRepository = container.get<MongoProductRepository>(TYPES.ProductRepository);
    const eventBus = new InMemoryEventBus();

    const saveProduct = new SaveProduct(productRepository, eventBus);

    eventBus.subscribe("catalog.product.created", {
        handle: async (event) => {
            console.log("Evento recibido:", event.eventName);
            console.log("aggregateId:", event.aggregateId);
            console.log("payload:", event.payload);
            console.log("occurredOn:", event.occurredOn);
        }
    });

    await saveProduct.execute({
        id: "550e8401-e29b-41d4-a716-446655440000",
        name: "Producto de prueba",
        baseUnit: "unidad",
        presentations: [
            {
                id: "550e8401-e29b-41d4-a716-446655441000",
                name: "Presentación 1",
                type: "caja",
                netQuantity: 10,
                unitOfMesure: "kg",
            },
        ],
    });

    await eventBus.dispatch();

    console.log("Producto guardado y evento publicado");
    await client.close();
}

main();