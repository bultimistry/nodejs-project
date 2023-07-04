const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../utils/jwtUtils");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
  } catch (err) {
    return res.status(403).json({ message: "Invalid token." });
  }
};
module.exports = authenticate;
