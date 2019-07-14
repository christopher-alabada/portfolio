const chai = require('chai');
const chaiHttp = require('chai-http');
const Page = require('../../models/Page');
const Skill = require('../../models/Skill');


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Pages API', () => {
  // Create new Page for api test
  before((done) => {
    const aboutPage = new Page({
      name: "about",
      title: "About Me",
      content: "Lorem ipsum forever!"
    });

    const react = new Skill({name: 'react'});
    const express = new Skill({name: 'express'});
    const mongodb = new Skill({name: 'mongodb'});
    const docker = new Skill({name: 'docker'});

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
      Page.deleteMany({}),
      Skill.deleteMany({})
    ])
      .then(() => done());
  });

  it('should GET /api/pages/about', (done) => {
    chai.request('http://localhost:5000')
      .get('/api/pages/about')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');

        res.body.should.have.property('name');
        res.body.name.should.equal('about');

        res.body.should.have.property('title');
        res.body.title.should.equal('About Me');

        res.body.should.have.property('content');
        res.body.content.should.equal('Lorem ipsum forever!');

        res.body.should.have.property('skills');
        res.body.skills[0].name.should.equal('react');
        res.body.skills[1].name.should.equal('express');
        res.body.skills[2].name.should.equal('mongodb');
        res.body.skills[3].name.should.equal('docker');

        done();
      });
  });
});