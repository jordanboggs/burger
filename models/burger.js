const orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions 
// using burger specific input for the ORM.

const burger = {
  getBurgers: function() {
    // Gets all burgers from database
  },

  addBurger: function(name) {
    // Adds a burger to the database
  },

  devourBurger: function(id) {
    // Sets devoured to true in database
  }
};

module.exports = burger;
