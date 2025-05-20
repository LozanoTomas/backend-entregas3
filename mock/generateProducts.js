const { faker } = require('@faker-js/faker');
const Product = require('../models/Product');

async function generateProducts(count = 5) {
  const products = Array.from({ length: count }).map(() => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }));
  return await Product.insertMany(products);
}

module.exports = generateProducts;