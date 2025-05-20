const express = require('express');
const mongoose = require('mongoose');
const mocksRouter = require('./routes/mocks.router');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
});

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});