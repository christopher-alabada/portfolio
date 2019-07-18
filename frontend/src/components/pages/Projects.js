import React from 'react';
import Server from '../../api/Server';

import '../../styles/Projects.css';

import ProjectItem from '../ProjectItem';


class Projects extends React.Component {
  state = { data: [] };

  componentDidMount() {
    Server.get('/api/projects')
      .then(response => {
        this.setState({ data: response.data });
      });
  }

  renderProjectItems() {
    if (this.state.data.length > 0) {
      return this.state.data.map(project => {
        return(
          <ProjectItem project={project} />
        );
      });
    }
  }

  render() {
    return(
      <div className="main-content">
        <h2>Projects</h2>
        <div className="project-items">
          {this.renderProjectItems()}
        </div>
      </div>
    );
  }
}

export default Projects;