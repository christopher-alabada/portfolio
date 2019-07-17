import React from 'react';
import Server from '../../api/Server';
import newline2p from '../../helpers/newline2p';

import '../../styles/Home.css';


class Home extends React.Component {
  state = { data: {}, skills: [] };

  componentDidMount() {
    Server.get('/api/pages/home')
      .then(response => {
        let skills = response.data.skills;
        delete response.data.skills;
        this.setState({ data: response.data, skills: skills });
      });
  }

  renderIntro(data) {
    return(
      <div className="home-intro">
        <h2>{data.title}</h2>
        {newline2p(data.content)}
      </div>
    );
  }

  renderSkills(skills) {
    if (skills.length > 0) {
      return skills.map(skill => {
        return (
          <div key={skill.name}>
            <div><img src={require(`../../images/${skill.image}`)} className="icon-skill" alt={skill.name} /></div>
            <div>{skill.name}</div>
          </div>
        );
      });
    }
  }

  render() {
    return(
      <div className="main-content">
        <div className="top-content">
          {this.renderIntro(this.state.data)}
          <div className="home-contact">
            <div>
              <div><img src={require('../../images/marker.png')} className="icon" alt="tokyo" /></div>
              <div>Tokyo, Japan</div>
            </div>
            <div>
              <div><img src={require('../../images/email.png')} className="icon" alt="email" /></div>
              <div><a href="http://gmail.com">christopher.alabada@gmail.com</a></div>
            </div>
            <div>
              <div><img src={require('../../images/linkedin.png')} className="icon" alt="linkedin" /></div>
              <div><a href="http://linkedin.com">christopher.alabada</a></div>
            </div>
            <div>
              <div><img src={require('../../images/github.png')} className="icon" alt="github" /></div>
              <div><a href="http://github.com">christopher.alabada</a></div>
            </div>
          </div>
        </div>

        <h2>Skills</h2>
        <div className="home-skills">
          {this.renderSkills(this.state.skills)}
        </div>
      </div>
    );
  }
}

export default Home;