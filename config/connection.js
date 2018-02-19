const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "burgers_db"
  }); 
}

connection.connect(err => {
  if (err) {
    console.log("Error connecting " + error.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
