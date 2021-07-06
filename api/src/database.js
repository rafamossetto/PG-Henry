const mongoose = require("mongoose");
//sequelize -> mongo

mongoose
  .connect("mongodb+srv://group8:JocvgniaXvuVmRfq@cluster0.pyqz2.mongodb.net/cinema?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
