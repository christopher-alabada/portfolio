const express = require('express');
const router = express.Router();
const Experience = require('../../models/Experience');
const Skill = require('../../models/Skill');

// GET /api/experiences
router.get('/', (req, res) => {
  if (req.get('Origin') === 'https://chris.topher.la') {
    Experience.find()
    .sort({ from: -1 })
    .then(experience => res.json(experience));
  } else {
    res.redirect('https://chris.topher.la');
  }
});

module.exports = router;