const express = require("express");
const morgan = require("morgan");
const getUser = require("../routes/user/get/getUser");
const routes = require("./Routes/index.js");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta GET /user
app.use("/user", getUser);
//---------------
app.get("/", (req, res) => {
  res.json("welcome to AutoCinema");
});
app.use("/", routes);

module.exports = app;
