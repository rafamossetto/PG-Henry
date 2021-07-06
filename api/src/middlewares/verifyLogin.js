const User = require("../models/User");

const checkUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with email provided not exist" });
    }

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkUser,
};
