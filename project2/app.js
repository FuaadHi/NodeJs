const express = require("express");
const app = express();

//main Home Page
app.get("/", (req, res, next) => {
  res.send(`<h1>Hello From Home Page</h1>
  <a href="/events">Go to Events Page`);
});

// Routs Requiring
const events = require("./routers/event_routs");

// use the required routes
app.use("/events", events);

// Port listening
app.listen(3000, (req, res) => {
  console.log("server is running.....");
});
