const express = require("express");
const morgan = require("morgan");
const routes = require('./Routes/index.js')
const app = express();
const cors = require('cors')



app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json('welcome to AutoCinema')
})

app.use('/', routes)

module.exports = app;
