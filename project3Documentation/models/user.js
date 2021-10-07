const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userschema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userschema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userschema.methods.comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

let User = mongoose.model("User", userschema, "users");

module.exports = User;
