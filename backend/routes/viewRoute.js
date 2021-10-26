const express = require("express");
const authController = require("../controllers/authController");
const User = require("../models/userschema");

const router = express.Router();

router.get("/admin", (req, res) => {
  res.render("layout", { title: "My Game Appp" });
});

router.get("/dashboard", async (req, res) => {
  const user = await User.find({ role: "user" });
  res.render("dashboard", { data: user });
});

router.post("/login", authController.AuthAdmin);

module.exports = router;
