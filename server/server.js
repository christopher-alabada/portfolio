const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const mongoURI = "mongodb://database:" + process.env.MONGODB_PORT + "/" + process.env.MONGODB_DATABASE
console.log(mongoURI);

const app = express();

app.use(express.json());

const mongooseOptions = {
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD,
  useNewUrlParser: true
};

mongoose.connect(mongoURI, mongooseOptions).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("MongoDB Error: \n", err));
mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));