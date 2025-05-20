const express = require('express');
const router = express.Router();
const generateUsers = require('../mock/generateUsers');
const generateProducts = require('../mock/generateProducts');
const logger = require('../utils/logger');

router.post('/:users/:products', async (req, res) => {
  const userCount = parseInt(req.params.users);
  const productCount = parseInt(req.params.products);
  logger.http(`POST recibido: ${userCount} users y ${productCount} products`);
  try {
    const users = await generateUsers(userCount);
    const products = await generateProducts(productCount);
    logger.http('Datos generados correctamente');
    res.status(201).json({ users, products });
  } catch (error) {
    logger.error('Error generando datos:', error);
    res.status(500).json({ error: 'Error generando datos' });
  }
});

module.exports = router;