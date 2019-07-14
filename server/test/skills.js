const assert = require('assert');
const Skill = require('../models/Skill');


describe('Skill model', () => {
  const php = new Skill({ name: 'php', image: 'php.png' });

  after((done) => {
    Skill.deleteMany({})
      .then(() => done());
  });

  it('can save a skill', (done) => {
    Skill.init()
      .then(() => {
        php.save()
          .then(() => {
            const phpquery = Skill.findOne({name: "php"});
            phpquery.exec((err, skill) => {
              assert(skill.name === 'php');
              assert(skill.image === 'php.png');
              done();
            });
          });
      });
  });


  it('should validate a non-empty name', (done) => {
    const blank = new Skill({ name: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Skill name is required.');
    done();
  });


  it('should validate unique name', (done) => {
    const php2 = new Skill({ name: 'php', image: 'php2.png' });
    php2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});