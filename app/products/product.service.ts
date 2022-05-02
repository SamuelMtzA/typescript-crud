
import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
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