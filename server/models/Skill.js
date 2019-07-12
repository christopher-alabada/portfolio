const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required.'],
    index: true,
    unique: true
  },
  image: {
    type: String
  }
});

module.exports = {
  Skill: mongoose.model('skill', SkillSchema),
  SkillSchema: SkillSchema
};