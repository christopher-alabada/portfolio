const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = Page = mongoose.model('page', PageSchema);