const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`Hello from events
  <a href="/"> Return to home </a>`);
});

module.exports = router;
