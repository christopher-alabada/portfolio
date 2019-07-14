const chai = require('chai');
const chaiHttp = require('chai-http');
const Page = require('../../models/Page');


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Pages API', () => {
  let aboutPage;

  before((done) => {
    aboutPage = new Page({
      name: "about",
      title: "About Me",
      content: "Lorem ipsum forever!"
    });

    aboutPage.save()
      .then(() => done());
  });

  after((done) => {
    Page.deleteMany({})
      .then(() => done());
  });

  it('should GET /api/pages/about', (done) => {
    chai.request('http://localhost:5000')
      .get('/api/pages/about')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        res.body.should.have.property('name');
        res.body.should.have.property('name').eql('about');

        res.body.should.have.property('title');
        res.body.should.have.property('title').eql('About Me');

        res.body.should.have.property('content');
        res.body.should.have.property('content').eql('Lorem ipsum forever!');
        done();
      });
  });
});