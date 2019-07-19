const assert = require('assert');
const Skill = require('../../src/models/Skill');


describe('Skill model', () => {
  const php = new Skill({ name: 'phptest', displayName: 'PHP', category: 'language', image: 'php.png' });

  after(done => {
    Skill.deleteOne({name: 'phptest'})
      .then(() => done());
  });

  it('can save a skill', done => {
    php.save()
      .then(() => {
        const phpquery = Skill.findOne({name: "phptest"});
        phpquery.exec((err, skill) => {
          assert(skill.name === 'phptest');
          assert(skill.displayName === 'PHP');
          assert(skill.category === 'language');
          assert(skill.image === 'php.png');
          done();
        });
      });
  });


  it('should validate a non-empty name', done => {
    const blank = new Skill({ name: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Skill name is required.');
    done();
  });


  it('should validate a non-empty displayName', done => {
    const blank = new Skill({ name: 'newone', displayName: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.displayName;

    assert(message === 'Skill displayName is required.');
    done();
  });


  it('should validate unique name', done => {
    const php2 = new Skill({ name: 'phptest', displayName: 'PHP', image: 'php2.png' });
    php2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});