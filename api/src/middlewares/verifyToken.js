const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token was provided" });
  }

  const decoded = await jwt.verify(token, "group8");
  console.log(decoded);

  next();
};

module.exports = {
  verifyToken,
};
