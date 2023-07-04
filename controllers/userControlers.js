const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error getting users." });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not find" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error getting user." });
  }
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error creating user." });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { username, password },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating user." });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user." });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
