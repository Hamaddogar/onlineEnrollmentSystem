var express = require("express");
var dbconfiq = require("./db/dbconfig");
var bodyParser = require("body-parser");
let signupUser = require("./api/signup");
let loginUser = require("./api/login");
let middleware = require("./db/middleware");

var app = express();
var cors = require("cors");

var PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use(signupUser);
app.use(loginUser);

app.get("/", middleware.checkToken, function (req, res) {
  res.status(200).send("Hello world");
});

app.listen(PORT, function () {
  console.log("Server is running on PORT:", PORT);
});
