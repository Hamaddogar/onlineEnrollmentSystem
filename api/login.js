var express = require("express");
var nodemailer = require("nodemailer");

var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../Model/user");
var config = require("../db/jwtkey");

async function sendMail(email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Confirm", // plain text body
    html: "<h4>Your Account has been approved</h4>", // html body
  });

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

router.post("/signin", function (req, res) {
  User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    if (user) {
      jwt.sign({ user }, config.secretKey, (err, token) => {
        res.json({ success: true, data: "Bearer " + token });
      });
    } else {
      return res.json({ success: false, data: "User  is not Found" });
    }
  });
});

router.get("/get-all", function (req, res) {
  User.find()
    .then((data) => res.json({ success: true, data: data }))
    .catch((err) => res.json({ success: false, data: err }));
});

router.get("/confirm-user", function (req, res) {
  User.findById(req.query.userId, function (err, doc) {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    sendMail(doc.email);
    doc.isConfirmedByAdmin = true;
    doc
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false, data: err });
      });
  });
});

module.exports = router;
