const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
