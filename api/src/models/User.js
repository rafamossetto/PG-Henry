const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
}

module.export = model("User", UserSchema);
