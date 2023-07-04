const express = require("express");
const authRoutes = require("./routs/authRoutes");
const userRoutes = require("./routs/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
