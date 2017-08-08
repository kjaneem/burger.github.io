var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//IN PROGRESS - Create the router for the app, and export the router at the end of your file.
var router = express.Router();

// GET - Requests data from a specified resource
// Create all our routes and set up logic within those routes where required.
//request data from /index home page
//when you go to the home page, return all of the rows in the burger table
//res - is the full list of burgers table rows
burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    
  });

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    //YOU MUST USE "index" here to call index.handlebars file
    res.render("index", hbsObject);
  });
});

// POST - Submits data to be processed to a specified resource
//res - is the row that was inserted
router.post("/", function(req, res) {
  burger.create([
                 "burger_name", 
                  "devoured"
                ], 
                  [
                    req.body.burger_name, 
                    req.body.devoured
                  ], function() {
                                res.redirect("/");
                                });
});

//res - is the row that was updated
router.put("/", function(req, res) {
  burger.update({
    devoured: req.body.devoured
  }, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
