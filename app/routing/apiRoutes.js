// ===============================================================================
// LOAD DATA
// We are linking our routes to the friend class which includes properties/method.
// ===============================================================================

var friendData = require("../data/friend");
//declaring a new friend instance of the friend class
var friend = new friendData();
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friend.friendArray);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // req.body is available since we're using the body-parser middleware
        // calling friendCompare from friend class to check for a match

        var match = friend.friendCompare(req.body);
        friend.friendArray.push(req.body);
        res.send(match);
    });

};
