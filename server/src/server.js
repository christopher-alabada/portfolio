const express = require('express');
const mongoose = require('mongoose');

// Mongoose models
const Page = require('./models/Page');
const Skill = require('./models/Skill');
const Project = require('./models/Project');

// get config variables
const config = require('../config');

// set port
const port = config.server.port || 5000;


// MongoDB Connection
mongoose.connect(config.db.uri, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected...');

    // init collections
    Promise.all([Page.init(), Skill.init(), Project.init()])
      .then(() => {
        // seed if development and if not already seeded
        if (process.env.NODE_ENV === 'development') {
          const SeedDatabase = require('./seeds/SeedDatabase');
          SeedDatabase();
        }
      });
  })
  .catch(err => console.log("MongoDB Error: \n", err));

// https://github.com/Automattic/mongoose/issues/6890
// This gets rid of error
mongoose.set('useCreateIndex', true);

// Set up server
const app = express();
app.use(express.json());

// Routes
const pages = require('./routes/api/pages');
const projects = require('./routes/api/projects');
app.use('/api/pages', pages);
app.use('/api/projects', projects);

// 404
app.use(function(req, res) {
  return res.status(404).json({ message: req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err });
});

// And finally, start server
app.listen(port, () => console.log(`Server started on port ${port}`));