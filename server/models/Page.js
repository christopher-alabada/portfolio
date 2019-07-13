const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Page name is required.'],
    index: true,
    unique: true
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = Page = mongoose.model('page', PageSchema);