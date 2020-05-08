var express = require("express");
var multer = require("multer");

var middleware = require("../db/middleware");
var Course = require("../Model/course");

var router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/get-courses", function (req, res) {
  Course.find()
    .then(function (data) {
      res.status(200).json({ success: true, data: data });
    })
    .catch(function (err) {
      res.status(500).json({ success: false, data: err });
    });
});

router.post(
  "/add-course",
  middleware.checkToken,
  upload.single("courseimg"),
  function (req, res) {
    var course = new Course({
      title: req.body.title,
      description: req.body.description,
      courseimg: req.file.filename,
    });
    course.save(function (err, course) {
      if (err) {
        return res.json({ success: false, err: err });
      }
      res.json({ success: true, data: course });
    });
  }
);

module.exports = router;
