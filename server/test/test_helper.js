// Set up test with mongodb connection
before((done) => {
  const MongoConnect = require('../src/database/MongoConnect');
  MongoConnect(() => {
    done();
  });
});