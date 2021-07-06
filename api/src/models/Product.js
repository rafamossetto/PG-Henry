const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  imgUrl: String,
});

module.exports = model("Product", ProductSchema);
