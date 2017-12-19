const express = require('express');
const app = express()

require('dotenv').config();
require('./routes')(app)
require('./lib/boot')(app)

const { sequelize } = require('./db')();
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
