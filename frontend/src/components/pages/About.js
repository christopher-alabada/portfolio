import React from 'react';

import '../../styles/About.css';
import php from '../../images/php.png';
import ruby from '../../images/ruby.png';
import javascript from '../../images/javascript.png';
import python from '../../images/python.png';
import bash from '../../images/bash.png';
import rails from '../../images/rails.png';
import react from '../../images/react.png';
import vue from '../../images/vue.png';
import nodejs from '../../images/nodejs.png';
import mysql from '../../images/mysql.png';
import graphql from '../../images/graphql.png';

import redis from '../../images/redis.png';
import apache from '../../images/apache.png';
import nginx from '../../images/nginx.png';
import centos from '../../images/centos.png';
import ubuntu from '../../images/ubuntu.png';
import rackspace from '../../images/rackspace.png';
import aws from '../../images/aws.png';
import heroku from '../../images/heroku.png';
import digitalocean from '../../images/digitalocean.png';



const About = () => {
  return(
    <div className="main-content">
      <div>
        <h2>About Me</h2>
        <p>
          Hi! I'm Christopher Alabada, a Full-Stack Developer, with over 12 years
          experience in internet technologies, ranging from PHP to Ruby on Rails,
          to React and Vue, to Linux/Unix server administration.
        </p>
        <p>
          Pragmatic, analytical, and a stickler for elegant and efficient code.
          Mostly self-taught, I've got a curious mind and an interest in the how's
          and why's of our world.
        </p>
      </div>

      <div>
        <h2>Skills</h2>

        <div>
          <h4>Languages</h4>
          <div className="skill-item">
            <div><img src={php} className="icon" alt="php" /></div>
            <div>PHP</div>
          </div>
          <div className="skill-item">
            <div><img src={ruby} className="icon" alt="ruby" /></div>
            <div>Ruby</div>
          </div>
          <div className="skill-item">
            <div><img src={javascript} className="icon" alt="javascript" /></div>
            <div>Javascript</div>
          </div>
          <div className="skill-item">
            <div><img src={python} className="icon" alt="python" /></div>
            <div>Python</div>
          </div>
          <div className="skill-item">
            <div><img src={bash} className="icon" alt="bash" /></div>
            <div>Bash Scripting</div>
          </div>
        </div>

        <div>
          <h4>Frameworks</h4>
          <div className="skill-item">
            <div><img src={rails} className="icon" alt="rails" /></div>
            <div>Rails</div>
          </div>
          <div className="skill-item">
            <div><img src={react} className="icon" alt="react" /></div>
            <div>React</div>
          </div>
          <div className="skill-item">
            <div><img src={vue} className="icon" alt="vue" /></div>
            <div>Vue</div>
          </div>
          <div className="skill-item">
            <div><img src={nodejs} className="icon" alt="nodejs" /></div>
            <div>Node.js</div>
          </div>
        </div>

        <div>
          <h4>Databases</h4>
          <div className="skill-item">
            <div><img src={mysql} className="icon" alt="mysql" /></div>
            <div>MySQL</div>
          </div>
          <div className="skill-item">
            <div><img src={graphql} className="icon" alt="graphql" /></div>
            <div>GraphQL</div>
          </div>
        </div>

        <div>
          <h4>Web Technologies</h4>
          <div className="skill-item">
            <div><img src={apache} className="icon" alt="apache" /></div>
            <div>Apache</div>
          </div>
          <div className="skill-item">
            <div><img src={nginx} className="icon" alt="nginx" /></div>
            <div>Nginx</div>
          </div>
          <div className="skill-item">
            <div><img src={redis} className="icon" alt="redis" /></div>
            <div>Redis</div>
          </div>
          <div className="skill-item">
            <div><img src={centos} className="icon" alt="centos" /></div>
            <div>CentOS</div>
          </div>
          <div className="skill-item">
            <div><img src={ubuntu} className="icon" alt="ubuntu" /></div>
            <div>Ubuntu</div>
          </div>
          <div className="skill-item">
            <div><img src={aws} className="icon" alt="aws" /></div>
            <div>AWS</div>
          </div>
          <div className="skill-item">
            <div><img src={rackspace} className="icon" alt="rackspace" /></div>
            <div>Rackspace</div>
          </div>
          <div className="skill-item">
            <div><img src={heroku} className="icon" alt="heroku" /></div>
            <div>Heroku</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;