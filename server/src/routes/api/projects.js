const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const Skill = require('../../models/Skill');

// GET /api/projects/:name
router.get('/:name', (req, res) => {
  Project.findOne({ name: req.params.name })
    .populate('skills')
    .then(project => res.json(project));
});

module.exports = router;