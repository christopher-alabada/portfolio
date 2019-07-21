require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

const config = {
  db: {
    root: {
      username: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD
    },
    database: process.env.MONGO_INITDB_DATABASE,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT
  },
  server: {
    host: 'portfolio.dev.topher.la',
    port: process.env.SERVER_PORT,
    key: process.env.HTTPS_KEY,
    crt: process.env.HTTPS_CERT
  },
  client: {
    url: 'http://portfolio.dev.topher.la:3000'
  },
  email: {
    to: 'christopher.alabada@gmail.com',
    from: 'portfolio-app@chris.topher.la'
  }
};

config.server.url = 'http://' + config.server.host + ":" + config.server.port;

config.db.uri = [
  "mongodb://",
  config.db.username,
  ":",
  config.db.password,
  "@",
  config.db.host,
  ":",
  config.db.port,
  "/",
  config.db.database
].join('');


module.exports = config;