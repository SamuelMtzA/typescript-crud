import faker from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}


const updateProduct = (id: string, changes: Product ) => {
  // code
}

const getProducts = () => {
  return products;
}

const deleteProduct = (id: string) => {
  // code
}

export{
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  products
}