const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

// Request By body-parser

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to dataBase
const db = require("./config/database");

// ejs template engine {view of MVC}
app.set("views engine", "ejs");
app.set("views", "views");

// Add statics files
app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.static("node_modules"));

// require Router
const events = require("./routers/event_routs");

//use Routers
app.use("/events", events);

// require user routes
const users = require("./routers/user_routs");
const { param } = require("jquery");

// use User routers
app.use("/users", users);

// session & connect-flash Config
app.use(
  session({
    secret: "Fuaad",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 15 },
  })
);
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());

//Home Page MiddleWare
app.get("/", (req, res, next) => {
  res.send(`
  <h1>Home Page</h1>
  <a href="/events"> Go to Events</a>`);
});
// Port listening
let port = 4000;
app.listen(port, (req, res) => {
  console.log(`server is running on Port: ${port}....`);
});
