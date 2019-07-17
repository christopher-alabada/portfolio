// Mongoose models
const Page = require('../models/Page');
const Skill = require('../models/Skill');
const Project = require('../models/Project');

// Seeds the database here. Also this is what we export.
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

// Seed pages once the skills create promise has resolved
const seedPages = () => {
  Page.estimatedDocumentCount(function(err, count) {
    if (count === 0) {
      // seed pages
      console.log("Seeding Pages...");
      require('./data/pages.js');
    }
  });
};

// Seed projects once the skills create promise has resolved
const seedProjects = () => {
  Project.estimatedDocumentCount(function(err, count) {
    if (count === 0) {
      // seed projects
      console.log("Seeding Projects...");
      require('./data/projects.js');
    }
  });
};


module.exports = SeedDatabase;