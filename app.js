var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello world');
});

app.get('/html', function(request, response) {
  var htmlCities = '<ul><li>San Francisco</li><li>Mumbai</li></ul>';
  response.send(htmlCities);
});

app.get('/json', function (request, response) {
  var jsonCities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(jsonCities);
});

app.get('/redirect', function (request, response) {
  response.redirect('/');
});

app.get('/redirectWithStatus', function (request, response) {
  response.redirect(301, '/');
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
