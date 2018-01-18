// ___________DEPENDENCIES___________
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// setup for express app
var app = express();
var PORT = process.env.PORT || 3000;

//________________DATA__________________

//______________ ROUTES_________________


//______________LISTENER________________


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

