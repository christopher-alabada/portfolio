const express = require('express');
const router = express.Router();
const Experience = require('../../models/Experience');
const Skill = require('../../models/Skill');

// GET /api/experiences
router.get('/', (req, res) => {
  Experience.find()
    .then(experience => res.json(experience));
});

module.exports = router;