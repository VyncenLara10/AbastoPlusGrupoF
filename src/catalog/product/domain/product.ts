import ProductBaseUnit from "./value-objects/product-base-unit";
import ProductId from "./value-objects/product-id";
import ProductName from "./value-objects/product-name";

export default class Product {
    private readonly productId: ProductId;
    private readonly productName: ProductName;
    private readonly productBaseUnit: ProductBaseUnit;

    constructor(productId: ProductId, productName: ProductName, productBaseUnit: ProductBaseUnit){
        this.productId = productId;
        this.productName = productName;
        this.productBaseUnit = productBaseUnit;
    }

    public static build (id: string, name: string, baseUnit: string): Product {
        return new Product(
            new ProductId(id),
            new ProductName(name),
            new ProductBaseUnit(baseUnit)
        );
    }
}