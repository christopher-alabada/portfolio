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
  Skill.findOne({ name: 'docker' }).exec(),
  Skill.findOne({ name: 'digitalocean' }).exec()
])
  .then((skills) => {
    projectsData.push({
      name: 'Ginge',
      description: 'A simple PHP template engine with nested if statements, and for loops. Can add custom functions and utilized a simple cache.',
      repo: 'christopher-alabada/Ginge',
      skills: [skills[0]]
    });
    projectsData.push({
      name: 'Mister Cocktail',
      description: 'My first Ruby on Rails app. A simple cocktails website where you can create cocktails and rate them.',
      link: 'http://mister-roostertails.herokuapp.com/cocktails',
      repo: 'christopher-alabada/rails-mister-cocktail',
      skills: [skills[1], skills[4], skills[10]]
    });
    projectsData.push({
      name: 'Homechef',
      description: 'Group project at Le Wagon Bootcamp. A service where you can hire a chef to cook at your home. Responsible for most of the backend and some items on the frontend.',
      link: 'https://home-chef.herokuapp.com/',
      repo: 'christopher-alabada/homechef',
      skills: [skills[1], skills[4], skills[10]]
    });
    projectsData.push({
      name: 'cMajor7',
      description: 'Final group project in Rails. A social networking site to connect musicians for gigs and open mics. Implemented the backend, live chat, and Mapbox.',
      link: 'https://cmajor7-226.herokuapp.com/',
      repo: 'christopher-alabada/cmajor7',
      skills: [skills[1], skills[4], skills[6], skills[11], skills[10]]
    });
    projectsData.push({
      name: 'Twitter Clone',
      description: 'A simple Twitter clone app. Utilizes Vue frontend with a Ruby on Rails API backend using PostgreSQL with GraphQL.',
      repo: 'christopher-alabada/twitter-clone',
      skills: [skills[1], skills[4], skills[9], skills[7]]
    });
    projectsData.push({
      name: 'Portfolio',
      description: 'This portfolio site. Built with React, Node, and Express. Also used Docker for development and production server.',
      link: 'http://chris.topher.la/',
      repo: 'christopher-alabada/chris.topher.la',
      skills: [skills[12], skills[2], skills[5], skills[13], skills[14], skills[15]]
    });

    Project.create(projectsData)
      .then(() => console.log("Done seeding Projects..."))
      .catch((err) => console.log(err));
  });