var router = require('express').Router();

var bodyParser = require('body-parser');
var parserUrlencoded = bodyParser.urlencoded({extended: false});

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
}

router.route('/')
  .get(function (request, response) {
    var blockKeys = Object.keys(blocks);

    if(request.query.limit >= 0){
      response.json(blockKeys.slice(0, request.query.limit));
    } else {
        response.json(blockKeys);
    }
  })
  .post(parserUrlencoded, function(request, response) {
    var block = request.body;
    blocks[block.name] = block.description;
    response.status(201).json(block.name);
  });

router.route('/:name')
  .all(function(req, res, next) {
    var name = req.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

    req.blockName = block;
    next();
  })
  .delete(function(request, response) {
    delete blocks[request.blockName];
    response.sendStatus(200);
  })
  .get(function (request, response) {
    var description = blocks[request.blockName];

    if(!description){
      response.status(404).json("No description found for " + request.params.name);
    } else {
      response.json(description);
    }
  });

module.exports = router;
