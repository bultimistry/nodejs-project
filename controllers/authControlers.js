const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const {
  generateAccessToken,
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwtUtils");

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.save(500).json({ message: "Error registering userr." });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not find." });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(301).json({ message: "Invalid password" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: "Error logging in " });
  }
};
module.exports = { register, login };
