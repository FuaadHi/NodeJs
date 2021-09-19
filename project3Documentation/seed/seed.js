const db = require("../config/database");
const Event = require("../models/event");

let newEvents = [
  new Event({
    title: "beach cleaning in Muscat1",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 2",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 3",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 4",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 5",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 6",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 7",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 8",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
  new Event({
    title: "beach cleaning in Muscat 9",
    discreption: "this is agood event which have an environmental aspect",
    location: "Muscat",
    date: Date.now(),
    created_at: Date.now(),
  }),
];

newEvents.forEach((event) => {
  event.save((err) => {
    if (err) console.log(err);
    else console.log(`metion completed..`);
  });
});

// let newevent = new Event({
//   title: "Event 1",
//   discreption: "This is The Event one",
//   location: "cairo",
//   date: Date.now(),
// });

// newevent.save((err) => {
//   if (!err) console.log("new event is added successfully");
//   else console.log(err);
// });
