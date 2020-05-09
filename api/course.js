var express = require("express");
var multer = require("multer");

var middleware = require("../db/middleware");
var User = require("../Model/user");
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

router.post("/join-course", middleware.checkToken, function (req, res) {
  User.findById(req.user.user._id, function (err, doc) {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    doc.name = req.body.name;
    doc.email = req.body.email;
    doc.cnic = req.body.cnic;
    doc.address = req.body.address;
    doc.learnway = req.body.learnway;
    doc.fatherName = req.body.fatherName;
    doc.oldAcademyName = req.body.oldAcademyName;
    doc.oldAcadmyAddress = req.body.oldAcadmyAddress;
    doc.oldAcademyEmail = req.body.oldAcademyEmail;
    doc.save().then(() => {
      Course.updateOne(
        { _id: req.body.courseId },
        { $push: { users: req.user.user._id } },
        function (err, doc) {
          if (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: err });
          }
          res.status(200).json({ success: true, data: "Successfull joined" });
        }
      );
    });
  });
});

router.post("/course-delete", middleware.checkToken, function (req, res) {
  Course.findByIdAndRemove(req.body.courseId)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false, data: err });
    });
});

router.post(
  "/edit-course",
  middleware.checkToken,
  upload.single("courseimg"),
  function (req, res) {
    console.log(req.body, req.file);
    Course.findById(req.body.courseId, function (err, doc) {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, data: err });
      }
      doc.title = req.body.title;
      doc.description = req.body.description;
      doc.courseimg = req.file.filename;
      doc
        .save()
        .then(() => res.status(200).json({ success: true }))
        .catch((err) => {
          console.log(err);
          res.status(500).json({ success: false, data: err });
        });
    });
  }
);

module.exports = router;
