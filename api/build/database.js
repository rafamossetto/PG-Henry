"use strict";

var mongoose = require("mongoose"); //sequelize -> mongo


mongoose.connect("mongodb://localhost/companydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Db is connected");
})["catch"](function (error) {
  return console.log(error);
});