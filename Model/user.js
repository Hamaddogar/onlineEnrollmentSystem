const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    defaul: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
