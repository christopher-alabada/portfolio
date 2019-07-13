import React from 'react';

import '../styles/ProjectItem.css';
import php from '../images/php.png';
import mysql from '../images/mysql.png';
import redis from '../images/redis.png';
import github from '../images/github.png';


class ProjectItem extends React.Component {
  render() {
    return(
      <div className="project-item">
        <div className="bold">{this.props.project}</div>
        <div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
            venenatis tortor, tincidunt tincidunt neque volutpat a. Sed ut ipsum
            efficitur, ullamcorper nunc non, interdum mauris. Ut lobortis
            placerat est, quis tincidunt arcu accumsan vel.
          </div>
          <div className="project-tech">
            <div className="card-skill">
              <div><img src={php} alt="php" /></div>
              <div>PHP</div>
            </div>
            <div className="card-skill">
              <div><img src={mysql} alt="mysql" /></div>
              <div>MySQL</div>
            </div>
            <div className="card-skill">
              <div><img src={redis} alt="redis" /></div>
              <div>Redis</div>
            </div>
          </div>
        </div>
        <div>
          <img src={github} alt="github" />
        </div>
      </div>
    );
  }
}

export default ProjectItem;