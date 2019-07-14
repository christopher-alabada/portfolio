const express = require('express');
const router = express.Router();
const Page = require('../../models/Page');
const Skill = require('../../models/Skill');

// GET /api/pages/:name
router.get('/:name', (req, res) => {
  Page.findOne({ name: req.params.name })
    .populate('skills')
    .then(page => res.json(page));
});

module.exports = router;