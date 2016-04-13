// This is a custom logger middleware module for express append

module.exports = function(request, response, next) {
  var start = +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;

  // Response will emit 'finish' when its done 
  response.on('finish', function() {
    var duration = +new Date() - start;
    var message = method + ' to ' + url + '\n took ' + duration + 'ms \n\n';
    stream.write(message);
  });

  next();
};
