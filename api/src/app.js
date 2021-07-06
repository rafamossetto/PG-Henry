const express = require('express')
const morgan = require('morgan')
const app = express();
const getUser = require('../routes/user/get/getUser');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta GET /user
app.use('/user', getUser);


module.exports = app;