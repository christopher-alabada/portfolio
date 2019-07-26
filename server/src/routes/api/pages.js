const express = require('express');
const router = express.Router();
const Page = require('../../models/Page');
const Skill = require('../../models/Skill');
const { cameFromClient, denyRequest } = require('./helper_protector');

// GET /api/pages/:name
router.get('/:name', (req, res) => {
  if (req.get('Origin') === 'https://chris.topher.la') {
    Page.findOne({ name: req.params.name })
      .populate('skills')
      .then(page => res.json(page))
      .catch(err => res.json({ message: err }));
  } else {
    res.redirect('https://chris.topher.la');
  }
});

module.exports = router;