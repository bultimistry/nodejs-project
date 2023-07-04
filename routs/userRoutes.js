const express = require("express");
const userControlers = require("../controllers/userControlers");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.use(authenticate);

router.get("/", userControlers.getUsers);
router.get("/:id", userControlers.getUserById);
router.post("/", userControlers.updateUser);
router.put("/:id", userControlers.updateUser);
router.delete("/:id", userControlers.deleteUser);

module.exports = router;
