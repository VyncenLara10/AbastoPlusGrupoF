import "reflect-metadata";
import { MongoClient } from "mongodb";
import TYPES from "./container/types";
import container from "./container/container";
import { InMemoryEventBus } from "./catalog/product/infrastructure/in-memory-event-bus";
import SaveProduct from "./catalog/product/application/use-cases/save-product";

async function main() {
    const client = container.get<MongoClient>(TYPES.MongoClient);
    await client.connect();

    const saveProduct = container.get<SaveProduct>(TYPES.SaveProduct);
    const eventBus = container.get<InMemoryEventBus>(TYPES.EventBus);

    await saveProduct.execute({
        id: "550e8401-e29b-41d4-a716-446655440000",
        name: "Producto de prueba",
        baseUnit: "kg",
        presentations: [
            {
                id: "550e8401-e29b-41d4-a716-446655441000",
                name: "Presentación 1",
                type: "box",
                netQuantity: 10,
                unitOfMesure: "kg",
            },
        ],
    });

    await saveProduct.execute({
        id: "550e8401-e29b-41d4-a716-446655440010",
        name: "Producto de prueba2",
        baseUnit: "lb",
        presentations: [
            {
                id: "550e8401-e29b-41d4-a716-446655441000",
                name: "Presentación 2",
                type: "box",
                netQuantity: 50,
                unitOfMesure: "lb",
            },
        ],
    });

    await eventBus.dispatch();

    console.log("Producto guardado y evento publicado");
    await client.close();
}

main();
