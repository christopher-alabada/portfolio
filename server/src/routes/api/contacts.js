const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const mailer = require('../../mailer/mailer');


router.use(cookieParser());
router.use(csurf({ cookie: true }));

// GET /api/contacts
router.get('/', (req, res) => {
  if (req.get('Origin') === 'https://chris.topher.la') {
    res.json({ token: req.csrfToken() });
  } else {
    res.redirect('https://chris.topher.la');
  }
});

// POST /api/contacts
router.post('/', (req, res) => {
  if (req.get('Origin') === 'https://chris.topher.la') {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    contact.save()
      .then(contact => {
        // send email
        mailer.sendEmail()
          .then(mailResponse => res.json({ message: ['Message saved successfully.', 'Email successfully sent.']}))
          .catch(err => res.json({ message: ['Message saved successfully.', 'Email failed.']}));
      })
      .catch(err => res.json({ message: 'Something wrong.', err: err }));
  } else {
    res.redirect('https://chris.topher.la');
  }
});

module.exports = router;