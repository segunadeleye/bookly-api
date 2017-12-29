const express = require('express');
const app = express()

require('dotenv').config();
require('./models')(app)
require('./lib/middlewares')(app)
require('./routes')(app)
require('./lib/boot')(app)

module.exports = app;
