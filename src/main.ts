import "reflect-metadata";
import container from "./container/container";
import TYPES from "./container/types";

import SaveProduct from "./catalog/product/application/use-cases/save-product";

async function Main() {

  console.log("Iniciando pruebas");

  const saveProduct = container.get<SaveProduct>(TYPES.SaveProduct);

  await saveProduct.execute({
      id: "507f1f77bcf86cd799439011",
      name: "Comida para gato",
      baseUnit: "kg",
      presentations: [
        {
          id: "p1",
          name: "Bolsa pequeña",
          type: "Bolsa",
          netQuantity: 1,
          unitOfMesure: "Kg"
        }
      ]
  });

}

Main();