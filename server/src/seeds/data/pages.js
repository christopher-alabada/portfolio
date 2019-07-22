const Skill = require('../../models/Skill');
const Page = require('../../models/Page');

const pagesData = [];

// Need to wait for findOne to resolve before we can use it
Skill.find({})
  .exec()
  .then(skills => {
    const skillsMap = {};
    skills.forEach(skill => {
      skillsMap[skill.name] = skill;
    });

    pagesData.push({
      name: "home",
      title: "Hello, I'm Chris!",
      content: "I'm a Full-Stack Developer, with over 12 years experience in internet technologies, ranging from PHP to Ruby on Rails, to React and Vue, to Linux/Unix server administration.\nPragmatic, analytical, and a stickler for elegant and efficient code. Mostly self-taught, I've got a curious mind and an interest in the how's and why's of our world.",
      skills: [
        skillsMap.php,
        skillsMap.javascript,
        skillsMap.ruby,
        skillsMap.bash,
        skillsMap.python,

        skillsMap.rails,
        skillsMap.react,
        skillsMap.vue,
        skillsMap.nodejs,

        skillsMap.mysql,
        skillsMap.mongodb,
        skillsMap.graphql,
        skillsMap.redis,

        skillsMap.docker,
        skillsMap.apache,
        skillsMap.nginx,
        skillsMap.aws,
        skillsMap.rackspace,
        skillsMap.heroku
      ]
    });

    Page.create(pagesData)
      .then(() => console.log("Done seeding Pages..."))
      .catch((err) => console.log(err));
  });