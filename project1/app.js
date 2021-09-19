const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
//

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "views");

const DB_URL = "mongodb://localhost:27017/appDB";

let userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

let User = mongoose.model("user", userSchema);

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  res.render("index", {
    users: [],
  });
  // mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
  //   console.log("DB is connected....");
  //   let newUser = new User({
  //     name: "fuaad",
  //     age: 22,
  //   });
  //   newUser.save((err, result) => {
  //     console.log(result);
  //   });
  //   mongoose.disconnect();
  // });
});

app.post("/", express.urlencoded({ extended: true }), (req, res, next) => {
  res.send("I'm callback");

  res.send("data is send");
  console.log(`is request:`);
  res.redirect("/");
});

app.listen(5000, () => console.log("server is running...."));

//
//
//
//
//
//
//
//
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo1 \n");
//   res.write("hellllooooooo2");
//   res.write("hellllooooooo2");
//   res.end();
// });
// server.listen(5000, () => "server is running....");

// console.log("hello");

// let name = require("./modules/module1");

// const circle1 = new name.piM(10);

// console.log(circle1.r);
// console.log(circle1.outline());
// console.log(circle1.area());
