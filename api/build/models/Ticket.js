"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var TicketSchema = new Schema({
  price: Number,
  user: String,
  show: String,
  products: Array
});

var _default = model("Ticket", TicketSchema); //, precio, usuario, función, Productos


exports["default"] = _default;