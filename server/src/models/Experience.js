const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  position: String,
  location: String,
  company: String,
  from: Date,
  to: Date,
  description: String
});

module.exports = Experience = mongoose.model('Experience', ExperienceSchema);