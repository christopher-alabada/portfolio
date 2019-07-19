const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'We need your name.']
  },
  email: {
    type: String,
    required: [true, 'We need your email.']
  },
  message: {
    type: String,
    required: [true, 'Say something.']
  }
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);