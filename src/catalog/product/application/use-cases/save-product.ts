import ProductRepository from "../product-repository";
import Product, { ProductPrimitives } from "../../domain/product";
import TranslationEnglishService from "../ports/translateService/translate-english-service";

export default class SaveProduct {

    constructor(
        private readonly productRepository: ProductRepository,
        private readonly translationService: TranslationEnglishService
    ) {}

    async execute(product: ProductPrimitives): Promise<void> {

        const translatedName = await this.translationService.translateToEnglish(product.name);

        const productEntity = Product.build(
            product.id,
            translatedName,
            product.baseUnit,
            product.presentations
        );

        await this.productRepository.save(productEntity);
    }
}