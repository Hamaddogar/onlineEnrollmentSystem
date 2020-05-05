var express = require("express");

const router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../Model/user");
var config = require("../db/jwtkey");

router.post("/login", function (req, res) {
  User.findOne({
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword,
  }).then((user) => {
    if (user) {
      jwt.sign(
        { user },
        config.secretKey,
        {
          expiresIn: 86400,
        },
        (err, token) => {
          res.json({ success: true, data: "Bearer " + token });
        }
      );
    } else {
      return res.json({ success: false, data: "User  is not Found" });
    }
  });
});

module.exports = router;
