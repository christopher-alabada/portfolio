const mongoose = require('mongoose');
const Page = require('../src/models/Page');
const Skill = require('../src/models/Skill');
const Project = require('../src/models/Project');

// get config variables
const config = require('../config');

// Use ES6 Promise
mongoose.Promise = global.Promise;

// Set up test with mongodb connection
before((done) => {
  mongoose.connect(config.db.test.uri, { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => {

      // Need to init() collections to index them
      Promise.all([Page.init(), Skill.init(), Project.init()])
        .then(() => done());
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });

  // https://github.com/Automattic/mongoose/issues/6890
  // This gets rid of error
  mongoose.set('useCreateIndex', true);
});


after((done) => {
  Promise.all([
    mongoose.connection.collections.pages.drop(),
    mongoose.connection.collections.skills.drop(),
    mongoose.connection.collections.projects.drop()
  ])
    .then(() => { done() });
});