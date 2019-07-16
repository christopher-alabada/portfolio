require('dotenv').config();

const config = {
  db: {
    root: {
      username: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD
    },
    test: {
      database: process.env.MONGODB_TEST_DATABASE
    },
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGO_INITDB_DATABASE,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT
  },
  server: {
    port: process.env.SERVER_PORT
  }
};

const mongodb_uri = [
  "mongodb://",
  config.db.username,
  ":",
  config.db.password,
  "@",
  config.db.host,
  ":",
  config.db.port
].join('');

config.db.test.uri = mongodb_uri + "/" + config.db.test.database;
config.db.uri = mongodb_uri + "/" + config.db.database;

module.exports = config;