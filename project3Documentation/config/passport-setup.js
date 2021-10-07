const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const user = require("../models/user");

passport.use(
  "local.signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      console.log(req.body);
      console.log(`passpoooooooooooooort`);
      if (req.body.password != req.body.confirm_password) {
        return done(null, false, console.log("Password Don't mach"));
      }
    }
  )
);
