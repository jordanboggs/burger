const mysql = require('mysql');

let connectConfig;
if (process.env.JAWSDB_URL) {
  connectConfig = process.env.JAWSDB_URL;
}
else {
  connectConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "burgers_db"
  };
}

const connection = mysql.createConnection(connectConfig);

connection.connect(err => {
  if (err) {
    console.log("Error connecting " + error.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
