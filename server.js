// ___________DEPENDENCIES___________
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); // allows you to work with directories and file paths, contains __dirname functionality.

// setup for express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//________________DATA__________________


//______________ ROUTES_________________
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});
//______________LISTENER________________

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

