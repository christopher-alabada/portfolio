// Mongoose models
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');

const seedPages = () => {
  Page.estimatedDocumentCount(function(err, count) {
    if (count === 0) {
      // seed pages
      console.log("Seeding Pages...");
      require('./data/pages.js');
    }
  });
};

const seedProjects = () => {
  Project.estimatedDocumentCount(function(err, count) {
    if (count === 0) {
      // seed projects
      console.log("Seeding Projects...");
      require('./data/projects.js');
    }
  });
};

const SeedDatabase = () => {
  Skill.estimatedDocumentCount(function(err, count) {
    if (count === 0) {
      // seed skills
      console.log("Seeding Skills...");
      const skillsData = require('./data/skills.js');
      Skill.create(skillsData)
        .then(() => {
          console.log("Done seeding Skills...");
          seedPages();
          seedProjects();
        });
    }
  });
};

module.exports = SeedDatabase;