const assert = require('assert');
const Page = require('../../src/models/Page');
const Skill = require('../../src/models/Skill');


describe('Page model', () => {
  let page, docker, mongodb;

  // set up test with a new page
  before((done) => {
    page = new Page({
      name: 'abouttest',
      title: 'About Me',
      content: 'Lorem ipsum forever!'
    });

    docker = new Skill({name: 'dockertest', displayName: 'Docker', image: 'docker.png'});
    mongodb = new Skill({name: 'mongodbtest', displayName: 'MongoDB', image: 'mongodb.png'});
    
    page.skills.push(docker);
    page.skills.push(mongodb);

    Promise.all([page.save(), docker.save(), mongodb.save()])
      .then(() => done());
  });


  // After tests, deleteMany so we don't lose indexes
  after((done) => {
    Promise.all([
      Page.deleteOne({name: 'abouttest'}),
      Skill.deleteOne({name: 'dockertest'}),
      Skill.deleteOne({name: 'mongodbtest'})
    ])
      .then(() => done());
  });


  it('can save a page.', (done) => {
    Page.findOne({name: 'abouttest'})
      .populate('skills')
      .then((page) => {
        assert(page.name === 'abouttest');
        assert(page.title === 'About Me');
        assert(page.content === 'Lorem ipsum forever!');
        assert(page.skills.length === 2);
        assert(page.skills[0].name === 'dockertest');
        assert(page.skills[1].name === 'mongodbtest');
        done();
      });
  });


  it('should validate a non-empty name', (done) => {
    const blank = new Page({ name: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Page name is required.');
    done();
  });


  it('should validate unique name', (done) => {
    const page2 = new Page({ name: 'abouttest' });
    page2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});