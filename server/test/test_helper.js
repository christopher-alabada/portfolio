const mongoose = require('mongoose');
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
require('dotenv').config();

mongoose.Promise = global.Promise;


before((done) => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => {
      Promise.all([Page.init(), Skill.init(), Project.init()])
        .then(() => done());
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
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