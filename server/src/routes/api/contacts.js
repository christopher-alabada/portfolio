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
  console.log('req: ', req);
  console.log('res: ', res);
  res.json({ postedData: 'posted' });
  // const contact = new Contact({
  //   name: req.params.name,
  //   email: req.params.email,
  //   message: req.params.message
  // });

  // contact.save()
  //   .then(contact => {
  //     res.json({ message: 'Message saved successfully.'});
  //   })
  //   .catch(err => res.json({ message: 'Something wrong.' }));
});

module.exports = router;