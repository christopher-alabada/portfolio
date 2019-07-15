const mongoose = require('mongoose');
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
require('dotenv').config();

// Use ES6 Promise
mongoose.Promise = global.Promise;

// Set up test with mongodb connection
before((done) => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
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