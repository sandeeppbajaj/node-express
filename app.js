var express = require('express');
var app = express();
var serveStatic = require('serve-static');

// Using the local logger module
var logger = require('./logger.js');
app.use(logger);
app.use(serveStatic('public', {maxAge: 86400000}));
//Binding static folder instead of writing routes for each public file
//app.use(express.static('public', {maxAge: 86400000}));

//Require the routes module for blocks
var blocks = require('./routes/blocks');
// Use module for path '/blocks'
app.use('/blocks', blocks);

module.exports = app;
