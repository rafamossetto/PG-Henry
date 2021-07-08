const User = require("../models/User");

const checkEmail = async (req, res, next) => {
  try {
    const { email, username } = req.body;
    let existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
        .status(400)
        .json(`Email ${email} already exists. Change it or log in`);
    }
    let existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res
        .status(400)
        .json(`Username ${username} already exists. Change it or log in`);
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkEmail,
};
