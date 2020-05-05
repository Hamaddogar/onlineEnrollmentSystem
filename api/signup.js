var express = require("express");

const router = express.Router();
var User = require("../Model/user");

router.post("/signup", function (req, res) {
  User.findOne({ userEmail: req.body.userEmail })
    .then((user) => {
      if (user) {
        return res.json({ success: false, data: "User already exist" });
      } else {
        let userSignup = new User({
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          userPassword: req.body.userPassword,
        });

        userSignup.save((err, user) => {
          if (err) {
            return res.json({ success: false, err: err });
          }

          res.json({ success: true, data: user });
        });
      }
    })
    .catch((err) => {
      return res.json({ success: false, err: err });
    });
});
module.exports = router;
