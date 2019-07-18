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
      from: 'January 2019',
      to: 'March 2019',
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
        assert(experience.from === 'January 2019');
        assert(experience.to === 'March 2019');
        assert(experience.description === 'Head chef of an Izakaya in Shibuya. Specializing in seafood.');
        done();
      });
  });

});