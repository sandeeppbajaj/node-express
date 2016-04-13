var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parserUrlencoded = bodyParser.urlencoded({extended: false});

// Using the local logger module
var logger = require('./logger.js');
app.use(logger);

//Binding static folder instead of writing routes for each public file
app.use(express.static('public'));

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
}

var locations = {
  'Fixed': 'First floor', 'Movable': 'Second floor', 'Rotating': 'Penthouse'
};

app.param('name', function(req,res,next) {
  var name = req.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

  req.blockName = block;
  next();
});

//Route for sending the block array as json for client ajax call
// with support for limit query parameter
app.get('/blocks', function (request, response) {
  var blockKeys = Object.keys(blocks);

  if(request.query.limit >= 0){
    response.json(blockKeys.slice(0, request.query.limit));
  } else {
      response.json(blockKeys);
  }
});

// Route for adding new block
app.post('/blocks', parserUrlencoded, function(request, response) {
  var block = request.body;
  blocks[block.name] = block.description;
  response.status(201).json(block.name);
});

app.delete('/blocks/:name', function(request, response) {
  delete blocks[request.blockName];
  response.sendStatus(200);
});

//Route for sending the block description as json for client ajax call
// with support for name path parameter
app.get('/blocks/:name', function (request, response) {
  var description = blocks[request.blockName];

  if(!description){
    response.status(404).json("No description found for " + request.params.name);
  } else {
    response.json(description);
  }
});

app.get('/locations/:name', function (request, response) {
  var description = locations[request.blockName];

  if(!description){
    response.status(404).json("No location found for " + request.params.name);
  } else {
    response.json(description);
  }
});

//Running app on port 8080
app.listen(8080, function() {
  console.log('Listening on port 8080');
});
