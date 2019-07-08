import React from 'react';

import '../../styles/Projects.css';

// import ProjectCard from '../ProjectCard';
import ProjectItem from '../ProjectItem';


class Projects extends React.Component {

  renderProjectCards() {
    const PROJECTS = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'];

    return PROJECTS.map(project => {
      return <ProjectItem project={project} />;
    });
  }

  render() {
    return(
      <div className="main-content">
        <h2>Projects</h2>
        <div className="project-items">
          {this.renderProjectCards()}
        </div>
      </div>
    );
  }
}

export default Projects;