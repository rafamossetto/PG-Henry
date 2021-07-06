const User = require("../models/User");

const checkEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    let existing = await User.findOne({ email: email });
    if (existing) {
      return res
        .status(400)
        .json(`${email} already exists. Change it or log in`);
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkEmail,
};
