const assert = require('assert');
const Page = require('../../models/Page');
const Skill = require('../../models/Skill');


describe('Page model', () => {
  let page, docker, mongodb;

  // set up test with a new page
  before((done) => {
    page = new Page({
      name: 'about',
      title: 'About Me',
      content: 'Lorem ipsum forever!'
    });

    docker = new Skill({name: 'docker', image: 'docker.png'});
    mongodb = new Skill({name: 'mongodb', image: 'mongodb.png'});
    
    page.skills.push(docker);
    page.skills.push(mongodb);

    Promise.all([page.save(), docker.save(), mongodb.save()])
      .then(() => done());
  });


  // After tests, deleteMany so we don't lose indexes
  after((done) => {
    Promise.all([
      Page.deleteMany({}),
      Skill.deleteMany({})
    ])
      .then(() => done());
  });


  it('can save a page.', (done) => {
    Page.findOne({name: 'about'})
      .populate('skills')
      .then((page) => {
        assert(page.name === 'about');
        assert(page.title === 'About Me');
        assert(page.content === 'Lorem ipsum forever!');
        assert(page.skills.length === 2);
        assert(page.skills[0].name === 'docker');
        assert(page.skills[1].name === 'mongodb');
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
    const page2 = new Page({ name: 'about' });
    page2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});