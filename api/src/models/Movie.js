const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  date: String,
  poster: String,
  description: String,
  genre: String,
  imdbID: String,
  onBillboard: Boolean,
  shows: Array,
});

export default model("Ticket", MovieSchema);
