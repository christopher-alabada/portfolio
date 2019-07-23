import React from 'react';

class ProjectSkills extends React.Component {
  render() {
    return this.props.skills.map(skill => {
      return(
        <div key={skill.name} className="d-flex align-items-center flex-row">
          <img src={require(`../images/${skill.image}`)} className="project-icon" alt={skill.name} />
        </div>
      );
    });
  }
}

export default ProjectSkills;