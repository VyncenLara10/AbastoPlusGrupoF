import { MongoClient } from 'mongodb';
import ProductId from './catalog/product/domain/value-objects/product-id';
import ProductName from './catalog/product/domain/value-objects/product-name';
import ProductBaseUnit from './catalog/product/domain/value-objects/product-base-unit';
import Product from './catalog/product/domain/product';
import MongoProductRepository from './catalog/product/infracstructure/mongo-product-repository';

async function Main() {
    console.log('Iniciando Pruebas de Dominio y Persistencia');

    const client = new MongoClient("mongodb://localhost:27017");

    try {
        await client.connect();
        console.log('Conectado a MongoDB');

        const repo = new MongoProductRepository(client);
        const id = new ProductId('558-552-665');
        const name = new ProductName('Comida para gato');
        const unit = new ProductBaseUnit('Kg');

        const productData = { 
            id: id.getValue(), 
            name: name.getValue(), 
            unit: unit.getValue(),
            price: 15.50 
        };

        console.log('Guardando producto validado...');
        await repo.save(productData);
        console.log("Producto guardado correctamente");

        const allProducts = await repo.findAll();
        console.log("Lista de productos en DB:", allProducts);

    } catch (error) {
        console.error('Error en el flujo:', (error as Error).message);
    } finally {
        await client.close();
        console.log('Conexión cerrada');
    }

    console.log('\nPrueba de Error (Validacion)');
    try {
        new ProductName(''); 
    } catch (error) {
        console.log('La validación de dominio funciono:', (error as Error).message);
    }
}

Main();