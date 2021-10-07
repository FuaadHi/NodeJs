const express = require("express");
const { get } = require("jquery");
const router = express.Router();
const Event = require("../models/event");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const axios = require("axios");

moment().format();

// Index Page
router.get("/", (req, res, next) => {
  Event.find({}, (err, events) => {
    // res.json(events);
    let chunk = [];
    let chunkSize = 3;
    for (let i = 0; i < events.length; i += chunkSize) {
      chunk.push(events.slice(i, chunkSize + i));
    }

    res.render("event/index.ejs", {
      chunk: chunk,
    });
  });
});

router.get("/create", (req, res, next) => {
  res.render("event/create.ejs", {
    // errors: req.flash("errors"),
    errors: [],
  });
});

//post Method
router.post(
  "/create",
  [
    check("title")
      .isLength({ min: 5 })
      .withMessage("title field shoud contain at least 5 chars!!."),
    check("discreption")
      .isLength({ min: 5 })
      .withMessage("discreption field shoud contain at least 5 chars!!."),
    check("location")
      .isLength({ min: 5 })
      .withMessage("location field shoud contain at least 5 chars!!."),
    check("date")
      .isLength({ min: 5 })
      .withMessage("date field shoud contain at least 5 chars!!."),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("event/create.ejs", {
        errors: errors.array(),
      });
    } else {
      let newEvent = new Event({
        title: req.body.title,
        discreption: req.body.discreption,
        location: req.body.location,
        date: req.body.date,
        created_at: Date.now(),
      });
      newEvent.save((err) => {
        if (!err) {
          console.log(`Event Was Added Successfully`);
          res.redirect("/events");
        } else console.log(err);
      });
    }
  }
);

// Show single Event page
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Event.findOne({ _id: req.params.id }, (err, event) => {
    if (!err) {
      // console.log(event);
      // console.log(id);
      res.render("event/show.ejs", {
        id: id,
        event: event,
      });
    } else console.log(err);
  });
});

// // Delete Event
// router.delete("/delete/:id", async (req, res) => {
//   console.log(req.params.id);
//   let query = { _id: req.params.id };
//   Event.deleteOne(query, (err) => {
//     if (!err) {
//       res.status(200).json("deleted");
//     } else {
//       res.status(404).json("There was An Error!!. Event wasn't deleted");
//     }
//   });
//   res.json("ok");
// });

// // Edit Page
// router.get("/edit/:id", (req, res) => {
//   let id = req.params.id;
//   Event.findOne({ _id: req.params.id }, (err, event) => {
//     if (!err) {
//       // console.log(event);
//       // console.log(id);
//       res.render("event/edit.ejs", {
//         id: id,
//         event: event,
//         eventDate: moment(event.date).format("YYYY-MM-DD"),
//         errors: [],
//       });
//     } else console.log(err);
//   });
// });

// // Update Event
// router.post(
//   "/update",
//   [
//     check("title")
//       .isLength({ min: 5 })
//       .withMessage("title field shoud contain at least 5 chars!!."),
//     check("discreption")
//       .isLength({ min: 5 })
//       .withMessage("discreption field shoud contain at least 5 chars!!."),
//     check("location")
//       .isLength({ min: 5 })
//       .withMessage("location field shoud contain at least 5 chars!!."),
//     check("date")
//       .isLength({ min: 5 })
//       .withMessage("date field shoud contain at least 5 chars!!."),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       console.log("There is an validation error");
//       Event.findOne({ _id: req.params.id }, (err, event) => {

//       })
//       res.render("event/edit.ejs", {

//       });
//       console.log("event is updaaaaaaaaaaaaatd");
//     } else "ok";
//   }
// );

module.exports = router;
