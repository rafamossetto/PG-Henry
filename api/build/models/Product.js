"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
});

var _default = model("Product", ProductSchema);

exports["default"] = _default;