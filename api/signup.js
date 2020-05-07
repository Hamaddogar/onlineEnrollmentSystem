var express = require("express");

const router = express.Router();
var User = require("../Model/user");

router.post("/signup", function (req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.json({ success: false, data: "User already exist" });
      } else {
        let userSignup = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
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
