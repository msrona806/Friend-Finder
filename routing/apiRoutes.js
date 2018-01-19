//***** DETERMINE WHAT DATA USER SEES AND WHAT DATA USER CAN POST TO SERVER *****
var friends = require('../app/data/friends.js');

module.exports = function(app) {
// GET route to display JSON of possible friends
app.get('/api/friends', function(req, res){
  res.json(friends);
});

// POST routes to handle incoming survey results and compatibility logic
app.post('/api/friends', function(req, res) {
  //brings in results entered to compare to friends list
  var newScores = req.body.scores;
  var scoreArr = [];
  var count = 0;
  var match = 0;

  // loop to go through current friends
  for (var i = 0; i,friends.length; i++){
    var difference = 0;

    for (var t = 0; t<newScores.length; t++){
      difference += (Math.abs(parseInt(friends[i].scores[j])));
    }
    // add results to score array
    scoreArr.push(difference);
  }
  // find best activity buddy
  for (var i=0; i<scoreArr.length; i++){
    if(scoreArr[i] <= scoreArr[match]){
      match = i;
    }
  }
  
  var buddy = friends[match];
  res.json(buddy);

  // add new friends entered to friend array
  friends.push(req.body);
  });
};