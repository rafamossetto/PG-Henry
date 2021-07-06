const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  date: String,
  poster: String,
  trailer: string,
  description: String,
  genre: String,
  imdbID: String,
  onBillboard: Boolean,
  shows: Array,
});

module.exports = model("Ticket", MovieSchema);
