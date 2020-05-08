let jwt = require("jsonwebtoken");
const config = require("./jwtkey");

let checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token) {
    token = token.slice(7, token.length);
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
