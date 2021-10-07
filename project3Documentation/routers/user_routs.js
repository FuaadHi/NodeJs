const express = require("express");
const { get } = require("jquery");
const passport = require("passport");
const router = express.Router();
const user = require("../models/user");

//login get request
router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

//login Post request
router.post("/login", (req, res) => {
  res.json("login in user...");
});

//signUp get request
router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

//signUp post request
router.post(
  "/signup",
  passport.authenticate("local.signup", {
    successRedirect: "/users/profile",
    failureRedirect: "/users/signup",
    failureFlash: true,
  })
);

// Profile
router.get("/profile", (req, res) => {
  res.render("user/profile.ejs");
});

// Profile
router.get("/logout", (req, res) => {
  res.json("logout the site...");
});

module.exports = router;
