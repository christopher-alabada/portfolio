const chai = require('chai');
const chaiHttp = require('chai-http');
const Project = require('../../src/models/Project');
const Skill = require('../../src/models/Skill');


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Projects API', () => {
  // Create new Project for api test
  before((done) => {
    const project = new Project({
      name: 'Project Name',
      description: 'This project is totally tubular',
      link: 'http://tubular.com',
      repo: 'project_name'
    });

    const php = new Skill({name: 'phptest', image: 'php.png'});
    const mysql = new Skill({name: 'mysqltest', image: 'mysql.png'});
    
    project.skills.push(php);
    project.skills.push(mysql);

    Promise.all([project.save(), php.save(), mysql.save()])
      .then(() => done());
  });

  after((done) => {
    Promise.all([
      Project.deleteOne({name: 'Project Name'}),
      Skill.deleteOne({name: 'phptest'}),
      Skill.deleteOne({name: 'mysqltest'})  
    ])
      .then(() => done());
  });


  it('should GET /api/projects/Project+Name', (done) => {
    chai.request('http://localhost:5000')
      .get('/api/projects/Project%20Name')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');

        res.body.should.have.property('name');
        res.body.name.should.equal('Project Name');

        res.body.should.have.property('description');
        res.body.description.should.equal('This project is totally tubular');

        res.body.should.have.property('link');
        res.body.link.should.equal('http://tubular.com');

        res.body.should.have.property('repo');
        res.body.repo.should.equal('project_name');

        res.body.should.have.property('skills');
        res.body.skills[0].name.should.equal('phptest');
        res.body.skills[1].name.should.equal('mysqltest');

        done();
      });
  });
});