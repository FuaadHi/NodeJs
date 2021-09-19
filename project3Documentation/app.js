const express = require("express");
const app = express();

// connect to dataBase
const db = require("./config/database");

// ejs template engine {view of MVC}
app.set("views engine", "ejs");
app.set("views", "views");

// Add statics files
app.use(express.static("public"));
app.use(express.static("node_modules"));

// require Router
const events = require("./routers/event_routs");

//use Routers
app.use("/events", events);

//Home Page MiddleWare
app.get("/", (req, res, next) => {
  res.send(`
  <h1>Home Page</h1>
  <a href="/events"> Go to Events</a>`);
});
// Port listening
app.listen(4000, (req, res) => {
  console.log("server is running....");
});
