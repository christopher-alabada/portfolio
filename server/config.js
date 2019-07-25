require('dotenv').config();

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
    host: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
    key: process.env.HTTPS_KEY,
    crt: process.env.HTTPS_CERT
  },
  client: {
    host: process.env.CLIENT_HOSTNAME,
    port: process.env.CLIENT_PORT,
  },
  email: {
    to: process.env.ADMIN_EMAIL,
    from: process.env.WEBSITE_EMAIL
  }
};

// Set url's
config.server.url = process.env.URL_SCHEME + '://' + config.server.host + ":" + config.server.port;
config.client.url = process.env.URL_SCHEME + '://' + config.client.host;
if (config.client.port !== "80") {
  config.client.url += ":" + config.client.port;
}

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