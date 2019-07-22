const Skill = require('../../models/Skill');
const Project = require('../../models/Project');

const projectsData = [];

// Need to get all the skills before we can use them
Promise.all([
  Skill.findOne({ name: 'php' }).exec(),
  Skill.findOne({ name: 'ruby' }).exec(),
  Skill.findOne({ name: 'javascript' }).exec(),
  Skill.findOne({ name: 'python' }).exec(),
  Skill.findOne({ name: 'rails' }).exec(),
  Skill.findOne({ name: 'react' }).exec(),
  Skill.findOne({ name: 'redis' }).exec(),
  Skill.findOne({ name: 'vue' }).exec(),
  Skill.findOne({ name: 'mysql' }).exec(),
  Skill.findOne({ name: 'graphql' }).exec(),
  Skill.findOne({ name: 'heroku' }).exec(),
  Skill.findOne({ name: 'mapbox' }).exec(),
  Skill.findOne({ name: 'nodejs' }).exec(),
  Skill.findOne({ name: 'mongodb' }).exec(),
  Skill.findOne({ name: 'docker' }).exec()
])
  .then((skills) => {
    projectsData.push({
      name: 'Ginge',
      description: 'A simple PHP template engine',
      repo: 'christopher-alabada/Ginge',
      skills: [skills[0]]
    });
    projectsData.push({
      name: 'Homechef',
      description: 'Group project at Le Wagon',
      link: 'https://home-chef.herokuapp.com/',
      repo: 'christopher-alabada/homechef',
      skills: [skills[1], skills[4], skills[10]]
    });
    projectsData.push({
      name: 'cMajor7',
      description: 'Final project at Le Wagon',
      link: 'https://cmajor7-226.herokuapp.com/',
      repo: 'christopher-alabada/cmajor7',
      skills: [skills[1], skills[4], skills[10], skills[6], skills[11]]
    });
    projectsData.push({
      name: 'Mister Cocktail',
      description: 'My first Ruby on Rails app',
      repo: 'christopher-alabada/rails-mister-cocktail',
      skills: [skills[1], skills[4], skills[10]]
    });
    projectsData.push({
      name: 'Twitter Clone',
      description: 'A Vue, graphql, rails app',
      repo: 'christopher-alabada/twitter-clone',
      skills: [skills[1], skills[4], skills[9], skills[7]]
    });
    projectsData.push({
      name: 'Portfolio',
      description: 'This portfolio site',
      link: 'http://chris.topher.la/',
      repo: 'christopher-alabada/chris.topher.la',
      skills: [skills[12], skills[2], skills[5], skills[13], skills[14]]
    });

    Project.create(projectsData)
      .then(() => console.log("Done seeding Projects..."))
      .catch((err) => console.log(err));
  });