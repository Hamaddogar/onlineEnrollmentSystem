var express = require("express");
require("./db/dbconfig");
var bodyParser = require("body-parser");
var signupUser = require("./api/signup");
var loginUser = require("./api/login");
var course = require("./api/course");
var middleware = require("./db/middleware");
var path = require("path");

var app = express();
var cors = require("cors");

var PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use(signupUser);
app.use(loginUser);
app.use(course);
app.use("/uploads", express.static(path.join(__dirname, "public/assets")));

app.get("/", middleware.checkToken, function (req, res) {
  res.status(200).send("Hello world");
});

app.listen(PORT, function () {
  console.log("Server is running on PORT:", PORT);
});
