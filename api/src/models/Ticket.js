const { Schema, model } = require("mongoose");

const TicketSchema = new Schema(
  {
    price: Number,
    user: String,
    show: String,
    products: Array,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Ticket", TicketSchema);

//, precio, usuario, función, Productos
