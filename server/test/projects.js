const assert = require('assert');
const Skill = require('../models/Skill');
const Project = require('../models/Project');


describe('Project model', () => {
  let project, php, mysql;

  before((done) => {
    project = new Project({
      name: 'Project Name',
      description: 'This project is totally tubular',
      link: 'http://tubular.com',
      repo: 'project_name'
    });

    php = new Skill({name: 'php', image: 'php.png'});
    mysql = new Skill({name: 'mysql', image: 'mysql.png'});
    
    project.skills.push(php);
    project.skills.push(mysql);

    Promise.all([project.save(), php.save(), mysql.save()])
      .then(() => done());
  });

  after((done) => {
    Project.deleteMany({})
      .then(() => done());
  });

  it('can save a project', (done) => {
    Project.findOne({name: 'Project Name'})
      .populate('skills')
      .then((proj) => {
        console.log(proj.skills[0].name);
        assert(proj.name === 'Project Name');
        assert(proj.description === 'This project is totally tubular');
        assert(proj.link === 'http://tubular.com');
        assert(proj.repo === 'project_name');
        assert(proj.skills[0].name === 'php');
        assert(proj.skills[1].name === 'mysql');
        done();
      });
  });

  it('should validate a non-empty name', (done) => {
    const blank = new Project({ name: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Project name is required.');
    done();
  });

  it('should validate unique name', (done) => {
    const project2 = new Project({ name: 'Project Name' });
    project2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});