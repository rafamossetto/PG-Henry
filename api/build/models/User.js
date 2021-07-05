"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  isAdmin: Boolean,
  bookings: Array
});

var _default = model("User", UserSchema);

exports["default"] = _default;