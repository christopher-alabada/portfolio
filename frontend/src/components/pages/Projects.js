import React from 'react';
import Server from '../../api/Server';
import ProjectItem from '../ProjectItem';
import '../../styles/projects.css';

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
          <ProjectItem key={project.name} project={project} />
        );
      });
    }
  }

  render() {
    return(
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4">Projects</h2>
          </div>
        </div>
        {this.renderProjectItems()}
      </div>
    );
  }
}

export default Projects;