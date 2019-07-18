const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required.'],
    index: true,
    unique: true
  },
  displayName: {
    type: String,
    required: [true, 'Skill displayName is required.']
  },
  category: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = Skill = mongoose.model('Skill', SkillSchema);