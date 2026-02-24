import Product from "../domain/product";

export default interface ProductRepository {
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    save(data: Product): Promise<void>;
    delete(id: string): Promise<void>;
}