const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let newUser = await new User({
      username,
      email,
      password: await User.hashPassword(password),
      isAdmin: false,
      bookings: [],
    });
    let userSaved = await newUser.save();
    const token = await jwt.sign({ id: userSaved._id }, "group8", {
      expiresIn: 86400,
    });

    res.status(201).send({ token });
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    const token = jwt.sign({ id: user._id }, "group8", {
      expiresIn: 86400,
    });

    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUp,
  logIn,
  getUsers,
};
