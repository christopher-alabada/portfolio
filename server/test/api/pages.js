const chai = require('chai');
const chaiHttp = require('chai-http');
const Page = require('../../src/models/Page');
const Skill = require('../../src/models/Skill');
const config = require('../../config');


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Pages API', () => {
  // Create new Page for api test
  before((done) => {
    const aboutPage = new Page({
      name: "abouttest",
      title: "About Me",
      content: "Lorem ipsum forever!"
    });

    const react = new Skill({name: 'reacttest', displayName: 'React' });
    const express = new Skill({name: 'expresstest', displayName: 'Express' });
    const mongodb = new Skill({name: 'mongodbtest', displayName: 'MongoDB' });
    const docker = new Skill({name: 'dockertest', displayName: 'Docker' });

    aboutPage.skills.push(react);
    aboutPage.skills.push(express);
    aboutPage.skills.push(mongodb);
    aboutPage.skills.push(docker);

    Promise.all([
      aboutPage.save(),
      react.save(),
      express.save(),
      mongodb.save(),
      docker.save()
    ])
      .then(() => done());
  });

  after((done) => {
    Promise.all([
      Page.deleteOne({name: "abouttest"}),
      Skill.deleteOne({name: 'reacttest'}),
      Skill.deleteOne({name: 'expresstest'}),
      Skill.deleteOne({name: 'mongodbtest'}),
      Skill.deleteOne({name: 'dockertest'})
    ])
      .then(() => done());
  });

  it('should GET /api/pages/about', (done) => {
    chai.request(config.server.url)
      .get('/api/pages/abouttest')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');

        res.body.should.have.property('name');
        res.body.name.should.equal('abouttest');

        res.body.should.have.property('title');
        res.body.title.should.equal('About Me');

        res.body.should.have.property('content');
        res.body.content.should.equal('Lorem ipsum forever!');

        res.body.should.have.property('skills');
        res.body.skills[0].name.should.equal('reacttest');
        res.body.skills[1].name.should.equal('expresstest');
        res.body.skills[2].name.should.equal('mongodbtest');
        res.body.skills[3].name.should.equal('dockertest');

        done();
      });
  });
});