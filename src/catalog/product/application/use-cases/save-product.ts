import ProductRepository from "../product-repository";
import Product, { ProductPrimitives } from "../../domain/product";

export default class SaveProduct {
    private readonly productRepository: ProductRepository;
    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(product: ProductPrimitives): Promise<void> {
        const productEntity = Product.build(
            product.id,
            product.name,
            product.baseUnit,
            product.presentations
        );
        await this.productRepository.save(productEntity);
    }
}