const express = require('express')
const morgan = require('morgan')
const getUser = require('../routes/get/getUser');
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta GET /user
app.use('/user', getUser);


module.exports = app;