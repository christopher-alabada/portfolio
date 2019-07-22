import React from 'react';
import ProjectSkills from './ProjectSkills';
import github from '../images/github.png';


class ProjectItem extends React.Component {
  render() {
    let projectLink = '';
    if (this.props.project.link) {
      projectLink = <a href={this.props.project.link} className="btn btn-outline-primary">Link</a>;
    }

    return(
      <div className="row">

        <div className="col-md-3 bold">{this.props.project.name}</div>

        <div className="col-md-7">
          <div>{this.props.project.description}</div>
          <div className="d-flex align-items-center flex-row px-2 pb-2">
            <ProjectSkills skills={this.props.project.skills} />
          </div>
        </div>

        <div className="col-md-1">
          <img src={github} className="icon" alt={this.props.project.repo} />
        </div>

        <div className="col-md-1">
          {projectLink}
        </div>

      </div>
    );
  }
}

export default ProjectItem;