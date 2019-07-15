const express = require('express');
const mongoose = require('mongoose');

// get .env variables
require('dotenv').config();

// set port
const port = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("MongoDB Error: \n", err));
mongoose.set('useCreateIndex', true);

// Set up server
const app = express();
app.use(express.json());

// Routes
const pages = require('./routes/api/pages');
const projects = require('./routes/api/projects');
app.use('/api/pages', pages);
app.use('/api/projects', projects);

// And finally, start server
app.listen(port, () => console.log(`Server started on port ${port}`));