var express = require('express');
var app = express();

// Using the local logger module
var logger = require('./logger.js');
app.use(logger);

//Binding static folder instead of writing routes for each public file
app.use(express.static('public'));

//Require the routes module for blocks
var blocks = require('./routes/blocks');
// Use module for path '/blocks'
app.use('/blocks', blocks);

//Running app on port 8080
app.listen(8080, function() {
  console.log('Listening on port 8080');
});
