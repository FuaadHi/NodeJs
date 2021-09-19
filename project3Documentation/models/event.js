const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discreption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

let Event = mongoose.model("Event", schema, "events");

module.exports = Event;
