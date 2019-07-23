import React from 'react';
import ProjectSkills from './ProjectSkills';
import github from '../images/github.png';


class ProjectItem extends React.Component {
  render() {
    let projectLink = '';
    if (this.props.project.link) {
      projectLink = <a href={this.props.project.link} className="btn btn-outline-primary project-link">Link</a>;
    }

    return(
      <div className="row justify-content-between mb-5">

        <div className="col-md-3 bold">
          <div className="mb-2">{this.props.project.name}</div>
          <div className="d-flex align-items-center flex-row">
            <ProjectSkills skills={this.props.project.skills} />
          </div>
        </div>

        <div className="col-md-6">
          <div>{this.props.project.description}</div>
        </div>

        <div className="col-md-2">
          <div className="d-flex align-items-center flex-row">
            <a href={"https://github.com/" + this.props.project.repo}>
              <img src={github} className="project-icon" alt={this.props.project.repo} />
            </a>
            {projectLink}
          </div>
        </div>

      </div>
    );
  }
}

export default ProjectItem;