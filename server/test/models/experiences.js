const assert = require('assert');
const Experience = require('../../src/models/Experience');

describe('Experience Model', () => {
  let experience, experience_id;

  // set up test with new Experience
  before(done => {
    experience = new Experience({
      position: 'Chef',
      location: 'Tokyo, Japan',
      company: 'Izakaya no Kurisu',
      from: '2019-01-01',
      to: '2019-03-01',
      description: 'Head chef of an Izakaya in Shibuya. Specializing in seafood.'
    });

    // save experience
    experience.save()
      .then((experience) => {
        experience_id = experience._id;
        done();
      });
  });

  // Clean up
  after(done => {
    Experience.deleteOne({ _id: experience_id })
      .then(() => done());
  });

  // Tests
  it('can save an experience.', done => {
    Experience.findOne({ _id: experience_id }).
      then((experience) => {
        assert(experience.position === 'Chef');
        assert(experience.location === 'Tokyo, Japan');
        assert(experience.company === 'Izakaya no Kurisu');
        assert(experience.from.getTime() === new Date(2019, 0).getTime());
        assert(experience.to.getTime() === new Date(2019, 2).getTime());
        assert(experience.description === 'Head chef of an Izakaya in Shibuya. Specializing in seafood.');
        done();
      });
  });

});