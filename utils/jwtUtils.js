const jwt = require("jsonwebtoken");
const jwtSecret = "your-secret-key";

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: "15m" });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: "7d" });
};
module.exports = { jwtSecret, generateAccessToken, generateRefreshToken };
