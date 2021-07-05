"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var MovieSchema = new Schema({
  title: String,
  date: String,
  poster: String,
  description: String,
  genre: String,
  imdbID: String,
  onBillboard: Boolean,
  shows: Array
});

var _default = model("Ticket", MovieSchema);

exports["default"] = _default;