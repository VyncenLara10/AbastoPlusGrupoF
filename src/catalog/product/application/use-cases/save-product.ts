import ProductRepository from "../product-repository";
import Product, { ProductPrimitives } from "../../domain/product";
import { EventBus } from "../../../../shared/domain/event-bus";
import { ProductCreatedEvent } from "../../domain/product-created.event";

export default class SaveProduct {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly eventBus: EventBus,
    ) {}

    async execute(product: ProductPrimitives): Promise<void> {
        console.log(product.presentations)
        const productEntity = Product.build(
            product.id,
            product.name,
            product.baseUnit,
            product.presentations
        );

        await this.productRepository.save(productEntity);

        await this.eventBus.publish([
            new ProductCreatedEvent(product.id, {
                name:     product.name,
                baseUnit: product.baseUnit,
            })
        ]);
    }
}