const User = require("../models/User");

const getUsers = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(404)
        .json({ message: "The user with email provided not exist" });

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid Password" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "500 Internal Server Error" });
  }
  res.json({
    message: `Succesfully ${username}`,
  });
};

const checkEmail = (req, res) => {
  const { email } = req.body;
  let existing = User.find({ email: email });
  if (existing) {
    console.log("Email ya registrado");
    return res.status(400).json(`${email} already exists. Change it or log in`);
  }
  return res.status(200).json("Valid email");
};

module.exports = {
  getUsers,
  checkEmail,
};
