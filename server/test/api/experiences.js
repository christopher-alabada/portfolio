const chai = require('chai');
const chaiHttp = require('chai-http');
const Experience = require('../../src/models/Experience');


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Experience API', () => {
  let snowboarder_id;

  // Create new Experience for api test
  before(done => {
    const snowboarder = new Experience({
      position: 'Pro Snowboarder',
      location: 'Mammoth, CA',
      company: 'Burton',
      from: new Date(2010, 11),
      to: new Date(2019, 3),
      description: 'I just snowboard everyday'
    });

    snowboarder.save()
      .then(boarder => {
        snowboarder_id = boarder._id;
        done();
      });
  });

  after(done => {
    Experience.deleteOne({ _id: snowboarder_id })
      .then(() => done());
  });

  it('should GET /api/experiences', (done) => {
    chai.request('http://localhost:5000')
      .get('/api/experiences')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('array');

        res.body[0].should.have.property('position');
        res.body[0].position.should.equal('Pro Snowboarder');

        res.body[0].should.have.property('location');
        res.body[0].location.should.equal('Mammoth, CA');

        res.body[0].should.have.property('company');
        res.body[0].company.should.equal('Burton');

        res.body[0].should.have.property('from');
        res.body[0].from.should.equal('2010-12-01T00:00:00.000Z');

        res.body[0].should.have.property('to');
        res.body[0].to.should.equal('2019-04-01T00:00:00.000Z');

        res.body[0].should.have.property('description');
        res.body[0].description.should.equal('I just snowboard everyday');

        done();
      });
  });
});