const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const Skill = require('../../models/Skill');

// GET /api/projects/
router.get('/', (req, res) => {
  if (req.get('Origin') === 'https://chris.topher.la') {
    Project.find({})
    .populate('skills')
    .then(projects => res.json(projects));
  } else {
    res.redirect('https://chris.topher.la');
  }
});

module.exports = router;