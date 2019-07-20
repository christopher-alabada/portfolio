const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../config');

// Configure chai
chai.use(chaiHttp);
chai.should();


describe('Server', () => {
  it('should return 404', (done) => {
    chai.request(config.server.url)
      .get('/does/not/exist.txt')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        res.should.have.status(404);
        done();
      });
  });
});