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
require('./routing/apiRoutes.js')(app);
  // console.log(res.body)

require('./routing/htmlRoutes.js')(app);
  // console.log(res.body)
//______________LISTENER________________

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

