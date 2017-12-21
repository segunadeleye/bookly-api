const express = require('express');
const app = express()

require('dotenv').config();
require('./models')(app)
require('./routes')(app)
require('./lib/boot')(app)
