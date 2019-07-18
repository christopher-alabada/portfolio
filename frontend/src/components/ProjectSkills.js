import React from 'react';

class ProjectSkills extends React.Component {
  render() {
    console.log(this.props.skills);
    return this.props.skills.map(skill => {
      return(
        <div className="card-skill">
          <div><img src={require(`../images/${skill.image}`)} alt={skill.name} /></div>
          <div>{skill.displayName}</div>
        </div>
      );
    });
  }
}

export default ProjectSkills;