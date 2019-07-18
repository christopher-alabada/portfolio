import React from 'react';
import Server from '../../api/Server';
import newline2p from '../../helpers/newline2p';
import capitalizeWords from '../../helpers/capitalizeWords';

import '../../styles/About.css';



class About extends React.Component {
  state = { data: {}, skills: [] };

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
    Server.get('/api/pages/about')
      .then(response => {
        let skills = this.skillsData(response.data.skills);
        delete response.data.skills;
        this.setState({ data: response.data, skills: skills });
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

  render() {
    return(
      <div className="main-content">
        {this.renderContent()}

        <div>
          <h2>Skills</h2>
          {this.renderSkills()}
        </div>
      </div>
    );
  }
};

export default About;