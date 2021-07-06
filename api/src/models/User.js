const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
  isAdmin: Boolean,
  bookings: Array,
});

export default model("User", UserSchema);
