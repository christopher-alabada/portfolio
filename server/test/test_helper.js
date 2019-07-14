const mongoose = require('mongoose');
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');

mongoose.Promise = global.Promise;
require('dotenv').config();


before((done) => {
  const mongoURI = "mongodb://database:" + process.env.MONGODB_PORT + "/" + process.env.MONGODB_DATABASE
  const mongooseOptions = {
    user: process.env.MONGODB_USERNAME,
    pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true
  };
  mongoose.connect(mongoURI, mongooseOptions);
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