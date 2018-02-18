/*
 * burger.js gets data from ORM to feed to controller
 */
const orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions 
// using burger specific input for the ORM.

const burger = {
  getBurgers: function(cb) {
    // Gets all burgers from database
    orm.selectAll(function (res) {
      cb(res);
    })
  },

  addBurger: function(name, cb) {
    // Adds a burger to the database
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },

  devourBurger: function(id, cb) {
    // Sets devoured to true in database
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
