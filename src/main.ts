import ProductId from './catalog/product/domain/value-objects/product-id';
import ProductName from './catalog/product/domain/value-objects/product-name';
import ProductBaseUnit from './catalog/product/domain/value-objects/product-base-unit';

async function Main() {
    console.log('Iniciando Pruebas de Dominio');

    try {
        const id = new ProductId('558-552-665');
        const name = new ProductName('Comida para gato');
        const unit = new ProductBaseUnit('Kg');

        console.log('Value Objects creados correctamente:');
        console.log(`ID: ${id.getValue()}`);
        console.log(`Nombre: ${name.getValue()}`);
        console.log(`Unidad: ${unit.getValue()}`);

    } catch (error) {
        console.error('Error en la validación de Value Objects:', (error as Error).message);
    }

    console.log('\nPrueba de Error (Validacion)');
    try {
        const invalidName = new ProductName(''); 
        console.log(invalidName);
    } catch (error) {
        console.log('La validacion funciono correctamente:', (error as Error).message);
    }
}

Main();