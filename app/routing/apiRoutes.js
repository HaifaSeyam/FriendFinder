// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

        friendsData.push(req.body);

        var userScore = req.body.scores;
  
        var matchName = "";
        var matchImage = "";
        var totalDifference = 50;

        for (var i = 0 ; i < friendsData.length - 1 ; i++) {

          var difference = 0;

          for (var k = 0; k < userScore.length; k++) {
            difference += Math.abs(friendsData[i].scores[k] - userScore[k]);
          }

          if (difference < totalDifference) {
          
            totalDifference = difference;
            matchName = friendsData[i].name;
            matchImage = friendsData[i].photo;
          }
        }
        
        res.json({status: true, matchName: matchName, matchImage: matchImage});
  });

 };
