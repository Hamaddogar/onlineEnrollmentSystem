var express = require("express");

const router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../Model/user");
var config = require("../db/jwtkey");

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

module.exports = router;
