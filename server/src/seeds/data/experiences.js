const experienceData = [
  {
    position: 'Teacher',
    location: 'Kyoto, Japan',
    company: 'Le Wagon',
    from: new Date(2019, 5),
    to: new Date(2019, 5),
    description: 'Taught intro Ruby on Rails for a week.\nLectured and presented live code.\nAssisted and tutored students with their projects.'
  },
  {
    position: 'LAMP Developer',
    location: 'El Segundo, California',
    company: 'The Design People, Inc.',
    from: new Date(2012, 10),
    to: new Date(2018, 11),
    description: 'Developed and maintained WordPress plugins and internal tools.\nCreated various scripts (Python, Bash, PHP) for our web servers hosting mostly WordPress sites.\nManaged multiple servers and cloud instances which hosts 5,000+ websites at Rackspace, AWS, and our own server cabinet utilizing Nginx/Apache and Nginx/PHP-FPM web servers.'
  },
  {
    position: 'Web Developer',
    location: 'Marina del Rey, California',
    company: 'The Design People, Inc.',
    from: new Date(2008, 10),
    to: new Date(2012, 10),
    description: 'Managed custom modules for our enterprise CMS application which hosts roughly 2,500+ websites.\nCoordinated with several developers to expand, customize, and maintain client’s websites.\nDeveloped customized modules for MLS/IDX data feeds, which used RETS, XML, and CSV.\nCreated the first set of plugins for our current WordPress product line.'
  },
  {
    position: 'System Administrator',
    location: 'Marina del Rey, California',
    company: 'The Design People, Inc.',
    from: new Date(2006, 1),
    to: new Date(2008, 7),
    description: 'Managed web, mail, dns, and backup servers.\nProvided tier III and tier II support, training for tier I, as well as emergency development work for our websites.\nDeveloped various tools in Bash (backup scripts, website creation scripts), websites in PHP (email server management, DNS management), and Salesforce.com\'s PHP API for our project management and production teams.'
  },
];

module.exports = experienceData;