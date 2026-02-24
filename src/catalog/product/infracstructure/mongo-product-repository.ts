import ProductRepository from "../application/product-repository";
import Product from "../domain/product";

export default class MongoProductRepository implements ProductRepository{
    async findAll(): Promise<any[]> {
        return [];
    }
    
    async findById(id: string): Promise<any | null> {
        return null;
    }

    async save(data: Product): Promise<void> {
        
    }

    async delete(id: string): Promise<void> {
    }
}
 