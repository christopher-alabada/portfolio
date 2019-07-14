const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Project name is required.'],
    index: true,
    unique: true
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
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }]
});

module.exports = Project = mongoose.model('Project', ProjectSchema);