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
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.addBurger(req.body.name, function(result) {
    res.json({ "name": result });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.devourBurger(req.params.id, function(result) {
    res.json({ "id": result });
  });
});

module.exports = router;
