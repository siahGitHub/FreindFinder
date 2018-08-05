// ===============================================================================
// friend class
// Class includes friendArray property which holds sample data.
// Class also includes friendCompare function to find a match.
// ===============================================================================
var friend = function Friend() {

    this.friendArray = [
        {
            "name": "Prince",
            "photo": "https://i.pinimg.com/736x/b0/20/4b/b0204be647f5af5cf7a86d83013b28bd--prince-purple-rain-heart.jpg",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },
        {
            "name": "Bob Marley",
            "photo": "http://kb4images.com/images/bob-marley-wallpaper/37567214-bob-marley-wallpaper.jpg",
            "scores": [
                4,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                2,
                1
            ]
        },
    ];

    this.friendCompare = function (friendToCompare) {
        var totalDifference = 100;
        var matchScore =0;
        var selectedMatch ={};
        for (i = 0; i < this.friendArray.length; i++) {
            for (j = 0; j < friendToCompare.scores.length; j++) {
                matchScore = matchScore + Math.abs(parseInt(friendToCompare.scores[j]) - parseInt(this.friendArray[i].scores[j]));
            };
            if (parseInt(matchScore) < parseInt(totalDifference)) {
                totalDifference = matchScore;
                selectedMatch = this.friendArray[i];
                matchScore =0;
            };
        };
        return selectedMatch;
    }

}
// Exporting class to be usuable by other files

module.exports = friend;
