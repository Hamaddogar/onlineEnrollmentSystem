const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cnic: String,
  phone: String,
  address: String,
  learnway: String,
  fatherName: String,
  oldAcademyName: String,
  oldAcadmyAddress: String,
  oldAcademyEmail: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isConfirmedByAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
