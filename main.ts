import faker from '@faker-js/faker';
import { addProduct, products } from './app/products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    // id: faker.random.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.random.boolean(),
    tags: [faker.commerce.productAdjective(), faker.commerce.productMaterial()],
    title: faker.commerce.productName(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.random.number(),
    categoryId: faker.random.uuid(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    // category: {
    //   id: faker.random.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent()
    // }
  })
  
}

console.log(products);