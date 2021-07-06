const { Router } = require("express");
const router = Router();
const User = require("../../../models/User");

/*
EW1 - back end - GET user para checkear que el mail y la contrasenia coincidan
*/
router.get("/", async (req, res) => {
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
});

module.exports = router;
