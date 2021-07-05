const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
});

export default model("Product", ProductSchema);
