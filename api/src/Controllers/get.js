const { User } = require("../models/User");

const checkEmail = (req, res) => {
  const { email } = req.body;
  let existing = User.find({ email: email });
  if (existing) {
    console.log("Email ya registrado");
    return res
      .status(400)
      .json(`${email} ya existe, cambialo o ingresa a tu cuenta`);
  }
  return res.status(200).json("Email válido");
};

module.exports = {
  checkEmail,
};
