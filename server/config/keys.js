require('dotenv').config();

module.exports = {
  mongoURI: "mongodb://" + MONGODB_USERNAME + ":" + MONGODB_PASSWORD + "@mongodb:" + MONGODB_PORT + "/" + MONGODB_DATABASE
};