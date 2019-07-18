import React from 'react';
import Server from '../../api/Server';
import newline2p from '../../helpers/newline2p';
import capitalizeWords from '../../helpers/capitalizeWords';

import '../../styles/About.css';



class About extends React.Component {
  state = { data: {}, skills: [], experiences: [] };

  skillsData = skills => {
    const data = {};
    let category;

    skills.forEach(skill => {
      category = capitalizeWords(skill.category || 'other technologies');
      if (typeof data[`${category}`] === 'undefined') {
        data[`${category}`] = [];
      }
      data[`${category}`].push(skill);
    });

    return data;
  };

  componentDidMount() {
    Promise.all([
      Server.get('/api/pages/about'),
      Server.get('/api/experiences')
    ])
      .then((responses) => {
        let skills = this.skillsData(responses[0].data.skills);
        delete responses[0].data.skills;

        this.setState({
          data: responses[0].data,
          skills: skills,
          experiences: responses[1].data
        });
      });
  }

  renderContent() {
    return(
      <div>
        <h2>{this.state.data.title}</h2>
        {newline2p(this.state.data.content)}
      </div>
    );
  }

  renderSkills() {
    if (typeof this.state.skills !== 'undefined') {
      return Object.keys(this.state.skills).map(category => {
        return (
          <div key={category}>
            <h4>{category}</h4>
            {this.state.skills[`${category}`].map(skill => {
              return (
                <div className="skill-item" key={skill.image}>
                  <div><img src={require(`../../images/${skill.image}`)} className="icon" alt={skill.image} /></div>
                  <div>{skill.displayName}</div>
                </div>
              );
            })}
          </div>
        );
      });
    }
  }

  renderExperiences() {
    if (this.state.experiences.length > 0) {
      return this.state.experiences.map(experience => {
        return (
          <div key={experience._id}>
            <div>
              <div>{experience.position}</div>
              <div>{experience.from} - {experience.to}</div>
            </div>
            <div>
              <div>{experience.company}</div>
              <div>{experience.location}</div>
            </div>
            <ul>
              {experience.description.split("\n").map((li, i) => <li key={i}>{li}</li>)}
            </ul>
          </div>
        );
      });
    }
  }
  render() {
    return(
      <div className="main-content">
        {this.renderContent()}

        <div>
          <h2>Skills</h2>
          {this.renderSkills()}
        </div>

        <div>
          <h2>Experience</h2>
          {this.renderExperiences()}
        </div>
      </div>
    );
  }
};

export default About;