const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userMail: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("user", userSchema);

module.exports = User;
