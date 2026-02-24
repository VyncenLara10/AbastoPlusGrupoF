import ProductRepository from "../application/product-repository";

export default class MongoProductRepository implements ProductRepository{
    async findAll(): Promise<any[]> {
        return [];
    }
    
    async findById(id: string): Promise<any | null> {
        return null;
    }

    async save(data: any): Promise<void> {
    }

    async delete(id: string): Promise<void> {
    }
}
 