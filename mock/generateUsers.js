const { faker } = require('@faker-js/faker');
const User = require('../models/User');

async function generateUsers(count = 5) {
  const users = Array.from({ length: count }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }));
  return await User.insertMany(users);
}

module.exports = generateUsers;