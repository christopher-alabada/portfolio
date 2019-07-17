const mongoose = require('mongoose');

// Mongoose models
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');

// get config variables
const config = require('../../config');


const MongoConnect = (onSuccess) => {
  // Use ES6 Promise
  mongoose.Promise = global.Promise;

  mongoose.connect(config.db.uri, { useNewUrlParser: true })
    .then(() => {
      console.log('MongoDB Connected...');

      // init collections
      Promise.all([Page.init(), Skill.init(), Project.init()])
        .then(() => onSuccess());
    })
    .catch(err => console.log("MongoDB Error: \n", err));

  // https://github.com/Automattic/mongoose/issues/6890
  // This gets rid of error
  mongoose.set('useCreateIndex', true);
};


module.exports = MongoConnect;