const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  date: String,
  poster: String,
  trailer: string,
  description: String,
  genre: String,
  onBillboard: Boolean,
  shows: Array,
  cast: String,
  trailer: String,
  rated: String,
  runtime: String,
  director: String, 
});

module.exports = model("Ticket", MovieSchema);
