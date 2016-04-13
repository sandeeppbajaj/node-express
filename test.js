var request = require('supertest');
var app = require('./app');

describe('Request to the root path', function() {
  it('Returns a 200 status code', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(error) {
        if(error) throw error;
        done();
      });
  });

  it("Returns a HTML format", function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it("returns an index file with Blocks", function (done) {
    request(app)
      .get('/')
      .expect(/blocks/i, done);
  });
});

describe('Listing Blocks on /blocks', function () {
  it("Return 200 status code", function (done) {
    request(app)
      .get('/blocks')
      .expect(200, done);
  });
});
