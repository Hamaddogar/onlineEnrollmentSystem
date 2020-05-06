const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  time: {
    type: String,
  },
  course: {
    type: String,
  },
  cnic: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  learnway: {
    type: String,
  },
  academyName: {
    type: String,
  },
  acadmyAddress: {
    type: String,
  },
  academyEmail: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },
  isConfirmedByAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
