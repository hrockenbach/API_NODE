const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const router = require('./routes/rotas');

app.set('port', process.env.PORT || 3333);
app.use('/api', router);

module.exports = app;

