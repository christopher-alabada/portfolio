const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');


router.use(cookieParser());
router.use(csurf({ cookie: true }));

// GET /api/contacts
router.get('/', (req, res) => {
  res.json({ token: req.csrfToken() });
});

// POST /api/contacts
router.post('/', (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  contact.save()
    .then(contact => res.json({ message: 'Message saved successfully.'}))
    .catch(err => res.json({ message: 'Something wrong.', err: err }));
});

module.exports = router;