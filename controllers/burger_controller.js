/* 
 * The controller puts CRUD functions into action 
 */

const express = require('express');
// Import the model to get its database functions
const burger = require('../models/burger.js');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.getBurgers(function(data){
    // Data is a json object { burgers: [array of data]}

    // Make two arrays for fresh and eaten burgers
    // let freshBurgers = [];
    // let eatenBurgers = [];

    // for (let i = 0; i < data.length; i++) {
    //   switch (data[i].devoured) {
    //     case (0):
    //       freshBurgers.push(data[i]);
    //       break;
    //     case (1):
    //       freshBurgers.push(data[i]);
    //       break;
    //   }
    // }

    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  
});

router.put("/api/burgers/:id", function(req, res) {

});

router.delete("/api/burgers/:id", function(req, res) {

});

module.exports = router;
