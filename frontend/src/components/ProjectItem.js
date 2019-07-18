import React from 'react';
import ProjectSkills from './ProjectSkills';

import '../styles/ProjectItem.css';
import github from '../images/github.png';


class ProjectItem extends React.Component {
  render() {
    return(
      <div className="project-item">
        <div className="bold">{this.props.project.name}</div>
        <div>
          <div>{this.props.project.description}</div>
          <div className="project-tech">
            <ProjectSkills skills={this.props.project.skills} />
          </div>
        </div>
        <div>
          <img src={github} alt="github" />
          <div>{this.props.project.repo}</div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;