import React from 'react';

import '../styles/ProjectItem.css';
import php from '../images/php.png';
import ruby from '../images/ruby.png';
import javascript from '../images/javascript.png';
import python from '../images/python.png';
import bash from '../images/bash.png';
import rails from '../images/rails.png';
import react from '../images/react.png';
import vue from '../images/vue.png';
import nodejs from '../images/nodejs.png';
import mysql from '../images/mysql.png';
import graphql from '../images/graphql.png';
import github from '../images/github.png';
import redis from '../images/redis.png';
import apache from '../images/apache.png';
import nginx from '../images/nginx.png';
import centos from '../images/centos.png';
import ubuntu from '../images/ubuntu.png';
import rackspace from '../images/rackspace.png';
import aws from '../images/aws.png';
import heroku from '../images/heroku.png';
import digitalocean from '../images/digitalocean.png';


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
              <div><img src={php} /></div>
              <div>PHP</div>
            </div>
            <div className="card-skill">
              <div><img src={mysql} /></div>
              <div>MySQL</div>
            </div>
            <div className="card-skill">
              <div><img src={redis} /></div>
              <div>Redis</div>
            </div>
          </div>
        </div>
        <div>
          <img src={github} />
        </div>
      </div>
    );
  }
}

export default ProjectItem;