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
      banned: false,
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
    const { name } = req.body;
    let user =
      (await User.findOne({ email: name })) ||
      (await User.findOne({ username: name }));
    const token = jwt.sign({ id: user._id }, "group8", {
      expiresIn: 86400,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  let users
  let { name } = req.query;
  //console.log(name)

  try {
    if(name) {
      users = await User.find({username: name});
      return res.status(200).send(users); 
    }else {
      users = await User.find();
      res.send(users);
    }
  } catch (error) {
    res.json({ error: "Username not found" })
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userFound = await User.findById(id);
    return res.json(userFound);
  } catch (error) {
    console.log(error);
  }
};

const verifyAdmin = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = await jwt.verify(token, "group8");
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).send({ message: "no user found" });
    } else {
      return res.send({ isAdmin: user.isAdmin });
    }
  } catch (error) {
    console.log(error);
  }
};

const putUser = async (req, res) => {
  try {
    const { username, email, isAdmin, banned } = req.body;

    let newUser = {
      username,
      email,
      isAdmin,
      banned,
      bookings: [],
    };
    await User.findByIdAndUpdate(req.params.id, newUser);
    //console.log(newUser);
    res.json({ status: "User Updated" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBookings = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.send(user.bookings);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUp,
  logIn,
  getUsers,
  getUserById,
  verifyAdmin,
  putUser,
  getBookings,
};
