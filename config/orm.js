const connection = require("./connection.js");

const orm = {
  // selectAll()
  selectAll: function(cb) {
    const query = "SELECT * FROM burgers";
    connection.query(query, function(err, data) {
      if (err) {
        console.log(err);
        return;
      }
      cb(data);
    });
  },

  // insertOne()
  insertOne: function(name, cb) {
    const query = "INSERT INTO burgers (burger_name) VALUES ?";
    connection.query(query, name, function(err, result) {
      if (err) console.log(err);
      cb(result);
    });
  },

  // updateOne()
  updateOne: function(id, cb) {
    const query = "UPDATE burgers SET devoured = 1 WHERE id = ?";
    connection.query(query, id, function(err, result) {
      if (err) console.log(err);
      cb(result);
    });
  }
}

module.exports = orm;
