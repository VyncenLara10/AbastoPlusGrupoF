import ProductBaseUnit from "./value-objects/product-base-unit";
import ProductId from "./value-objects/product-id";
import ProductName from "./value-objects/product-name";
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
        const productPresentations: ProductPresentation[] = presentations.map(p => ProductPresentation.build(p.id, p.name, p.type, p.netQuantity, p.unitOfMesure));
        return new Product(
            new ProductId(id),
            new ProductName(name),
            new ProductBaseUnit(baseUnit),
            productPresentations
        );
    }
}