var express = require("express");
const User = require("../model/user");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/insert", (req, res, next) => {
  let user = new User({
    userName: req.body.userName,
    userMail: req.body.userEmail,
  });

  user.save((err, result) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      console.log(result);
      res.redirect("/getusers");
    }
  });
});

router.get("/getusers", (req, res, next) => {
  User.find({}, "userName userMail", (err, result) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      // console.log(result);
      res.render("index", { items: result });
    }
  });
});

router.post("/update", (req, res, next) => {
  const ID = req.body.ID;

  let updatedUser = {
    userName: req.body.userName,
    userMail: req.body.userEmail,
  };

  User.updateOne({ _id: ID }, { $set: updatedUser }, (err, doc) => {
    if (err) {
      console.log(err);
      res.redirect("/");
      return;
    }
    console.log(`This is the doc: ${doc}`);
    res.redirect("/getusers");
  });
});

router.post("/delete", (req, res, next) => {
  const ID = req.body.ID;

  User.deleteOne({ _id: ID }, (err, doc) => {
    if (err) {
      console.log(err);
      res.redirect("/");
      return;
    }
    res.redirect("/getusers");
  });
});

module.exports = router;
