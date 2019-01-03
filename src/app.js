'use strict';

const express = require('express');
const bobyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb://balta:balta1@ds121955.mlab.com:21955/balta');

// Carrega os Models
const Product = require('./models/product');

//carregar as rotas
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/product-route');

app.use(bobyParser.json());
app.use(bobyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productsRoute);

module.exports = app;