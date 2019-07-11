const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  repo: {
    type: String
  },
  skills: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Skills'
  }
});

module.exports = Project = mongoose.model('project', ProjectSchema);