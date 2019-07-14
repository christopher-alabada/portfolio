const express = require('express');
const router = express.Router();
const Page = require('../../models/Page');

// GET /api/pages/:name
router.get('/:name', (req, res) => {
  Page.findOne({ name: req.params.name })
    .then(page => res.json(page));
});

module.exports = router;