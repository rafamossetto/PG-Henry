const { Schema, model } = require("mongoose");

const TicketSchema = new Schema({
  price: Number,
  user: String,
  show: String,
  products: Array,
});

module.exports = model("Ticket", TicketSchema);

//, precio, usuario, función, Productos
