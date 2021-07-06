const mongoose = require("mongoose");
//sequelize -> mongo

mongoose
  .connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
