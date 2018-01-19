// ***** DIRECTS USER, WHAT HAPPENS WHEN USER CLICKS ON LINK ******
var path = require('path');
var app = require('express');

module.exports = function (app) {
    
  // Route to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
  });

  // Route to home html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });
}