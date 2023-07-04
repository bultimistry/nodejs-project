const express = require("express");
const authControlers = require("../controllers/authControlers");

const router = express.Router();

router.post("/register", authControlers.register);
router.post("/login", authControlers.login);

module.exports = router;
