const express = require('express');
const https = require('https');
const cors = require('cors');
const config = require('../config');
const fs = require('fs');

// set server port from config. Use 5000 if not set
const port = config.server.port || 5000;

// MongoDB Connection
const MongoConnect = require('./database/MongoConnect');
MongoConnect(() => {
  // seed if development and if not already seeded
  if (process.env.NODE_ENV === 'development') {
    const SeedDatabase = require('./seeds/SeedDatabase');
    SeedDatabase();
  }
});

// Set up server
const app = express();
app.use(express.json());
app.use(cors({ origin: config.client.url }));

// Routes
app.use('/api/pages', require('./routes/api/pages'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/experiences', require('./routes/api/experiences'));

// 404
app.use(function(req, res) {
  return res.status(404).json({ message: req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err });
});

// And finally, start server
https.createServer({
  key: fs.readFileSync(config.server.key),
  cert: fs.readFileSync(config.server.crt)
}, app).listen(port, () => console.log(`Server started on port ${port}`));