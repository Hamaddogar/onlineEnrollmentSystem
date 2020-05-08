const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  title: String,
  description: String,
  courseimg: String,
});

module.exports = mongoose.model("course", courseSchema);
