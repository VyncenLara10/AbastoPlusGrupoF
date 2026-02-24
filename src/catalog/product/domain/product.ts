import ProductBaseUnit from "./value-objects/product-base-unit";
import ProductId from "./value-objects/product-id";
import ProductName from "./value-objects/product-name";
import PresentationCreator from "./entities/presentation/presentation-creator";
import ProductPresentation from './entities/presentation';

export default class Product {
    private readonly productId: ProductId;
    private readonly productName: ProductName;
    private readonly productBaseUnit: ProductBaseUnit;
    private readonly productPresentations: ProductPresentation[];

    constructor(productId: ProductId, productName: ProductName, productBaseUnit: ProductBaseUnit, productPresentations: ProductPresentation[]){
        this.productId = productId;
        this.productName = productName;
        this.productBaseUnit = productBaseUnit;
        this.productPresentations = productPresentations;
    }

    public static build (id: string, name: string, baseUnit: string, presentations: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMesure: string}>): Product {
        const productId = new ProductId(id);
        const productName = new ProductName(name);
        const productBaseUnit = new ProductBaseUnit(baseUnit);
        const productPresentations = PresentationCreator.createPresentations(presentations, []);
        return new Product(productId, productName, productBaseUnit, productPresentations);
    }
}