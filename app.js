var express = require('express');
var app = express();

// Using the local logger module
var logger = require('./logger.js');
app.use(logger);

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/public/index.html');
// });

//Binding static folder instead of writing routes for each public file
app.use(express.static('public'));

//Route for sending the block array as json for client ajax call
app.get('/blocks', function (request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  response.send(blocks);
});

//Running app on port 8080
app.listen(8080, function() {
  console.log('Listening on port 8080');
});
