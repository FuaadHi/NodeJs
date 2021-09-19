const express = require("express");
const router = express.Router();
const Event = require("../models/event");

// Index Page
router.get("/", (req, res, next) => {
  Event.find({}, (err, events) => {
    // res.json(events);
    let chunk = [];
    let chunkSize = 3;
    for (let i = 0; i < 9; i += chunkSize) {
      chunk.push(events.slice(i, chunkSize + i));
    }

    res.render("event/index.ejs", {
      chunk: chunk,
    });
  });
});

// Show single Event page
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Event.find({ _id: req.params.id }, (err, event) => {
    if (!err) {
      console.log(event);
      console.log(id);
      res.render("event/show.ejs", {
        id: id,
        event: event,
      });
    } else console.log(err);
  });
});

module.exports = router;
