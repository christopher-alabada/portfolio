const mongoose = require('mongoose');

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
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
  mongoose.set('useCreateIndex', true);
});

after((done) => {
  mongoose.connection.collections.skills.drop(() => {
    done();
  });

  mongoose.connection.collections.pages.drop(() => {
    done();
  });
});