import React from 'react';
import Server from '../../api/Server';
import newline2p from '../../helpers/newline2p';
import capitalizeWords from '../../helpers/capitalizeWords';
import ContactForm from '../ContactForm';


class Home extends React.Component {
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
      Server.get('/api/pages/home'),
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
    if (Object.keys(this.state.skills).length > 0) {
      return Object.keys(this.state.skills).map(category => {
        return (
          <div className="col-md-3 col-sm-6 mb-2" key={category}>
            {this.state.skills[`${category}`].map(skill => {
              return (
                <div key={skill.name} className="d-flex align-items-center flex-row px-2 pb-2">
                  <img src={require(`../../images/${skill.image}`)} className="icon-skill" alt={skill.name} />
                  <div className="skill-text pl-1">{skill.displayName}</div>
                </div>
              );
            })}
          </div>
        );
      });
    }
  }

  renderExperiences() {
    const dateOptions = { month: 'long', year: 'numeric' };

    if (this.state.experiences.length > 0) {
      let fromDate, toDate;

      return this.state.experiences.map(experience => {
        fromDate = new Date(experience.from).toLocaleDateString('default', dateOptions);
        toDate = new Date(experience.to).toLocaleDateString('default', dateOptions);
        
        return (
          <div className="row mb-5 justify-content-between" key={experience._id}>
            <div className="col-md-3">
              <div className="title">{experience.position}</div>
              <div className="title sub">{experience.company}</div>
              <div className="title sub">{experience.location}</div>
              <div className="title sub">{fromDate} - {toDate}</div>
            </div>

            <div className="col-md-9 dark-red-berry-bullets">
              <ul>{experience.description.split("\n").map((li, i) => <li key={i}>{li}</li>)}</ul>
            </div>
          </div>
        );
      });
    }
  }
  
  render() {
    return(
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4">{this.state.data.title}</h2>
          </div>
        </div>

        <div className="row mb-5 justify-content-between">
          <div className="col-md-8 mb-2">
            {newline2p(this.state.data.content)}
          </div>
          
          <div className="col-md-3">
            <div className="d-flex align-items-center flex-row mb-3 mt-10">
              <img src={require('../../images/marker.png')} className="icon" alt="tokyo" />
              <div className="contact-text text-nowrap">Tokyo, Japan</div>
            </div>
            <div className="d-flex align-items-center flex-row mb-3">
              <img src={require('../../images/email.png')} className="icon" alt="email" />
              <div className="contact-text">
                <a href="mailto:chris@topher.la?subject=Message%20From%20http://chris.topher.la">chris@topher.la</a>
              </div>
            </div>
            <div className="d-flex align-items-center flex-row mb-3">
              <img src={require('../../images/linkedin.png')} className="icon" alt="linkedin" />
              <div className="contact-text"><a href="https://www.linkedin.com/in/christopher-alabada/">christopher.alabada</a></div>
            </div>
            <div className="d-flex align-items-center flex-row mb-3">
              <img src={require('../../images/github.png')} className="icon" alt="github" />
              <div className="contact-text"><a href="https://github.com/christopher-alabada">christopher.alabada</a></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4">Technical Toolbox</h2>
          </div>
        </div>

        <div className="row mb-5 justify-content-between">
          {this.renderSkills()}
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4">Experience</h2>
          </div>
        </div>

        {this.renderExperiences()}

        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-3" id="Contact_Me">Contact Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ContactForm />
          </div>
        </div>
        
        
      </div>
    );
  }
};

export default Home;