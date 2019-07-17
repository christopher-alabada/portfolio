import React from 'react';
import Server from '../../api/Server';

import '../../styles/Home.css';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';


import ruby from '../../images/ruby.png';
import javascript from '../../images/javascript.png';
import python from '../../images/python.png';
import rails from '../../images/rails.png';
import react from '../../images/react.png';
import vue from '../../images/vue.png';
import mysql from '../../images/mysql.png';
import graphql from '../../images/graphql.png';


class Home extends React.Component {
  homePage = async () => {
    const response = await Server.get('/api/pages/home');

    return response.data.results;
  }

  render() {
    return(
      <div className="main-content">
        <div className="top-content">
          <div className="home-intro">
            <p>{this.homePage()}</p>
            <h2>Hello, I'm Chris!</h2>
            <p>
              I'm a Full Stack Developer with over 10 years experience as both a
              system administrator and web developer. I specialize in PHP, Ruby on Rails,
              and JavaScript. Currently living in Tokyo.
            </p>
          </div>
          <div className="home-contact">
            <div>
              <div><img src={require('../../images/marker.png')} className="icon" alt="tokyo" /></div>
              <div>Tokyo, Japan</div>
            </div>
            <div>
              <div><img src={email} className="icon" alt="email" /></div>
              <div><a href="http://gmail.com">christopher.alabada@gmail.com</a></div>
            </div>
            <div>
              <div><img src={linkedin} className="icon" alt="linkedin" /></div>
              <div><a href="http://linkedin.com">christopher.alabada</a></div>
            </div>
            <div>
              <div><img src={github} className="icon" alt="github" /></div>
              <div><a href="http://github.com">christopher.alabada</a></div>
            </div>
          </div>
        </div>

        <h2>Skills</h2>
        <div className="home-skills">
          <div>
            <div><img src={require('../../images/php.png')} className="icon-skill" alt="php" /></div>
            <div>PHP</div>
          </div>
          <div>
            <div><img src={ruby} className="icon-skill" alt="ruby" /></div>
            <div>Ruby</div>
          </div>
          <div>
            <div><img src={javascript} className="icon-skill" alt="javascript" /></div>
            <div>JavaScript</div>
          </div>
          <div>
            <div><img src={python} className="icon-skill" alt="python" /></div>
            <div>Python</div>
          </div>
          <div>
            <div><img src={rails} className="icon-skill" alt="rails" /></div>
            <div>Rails</div>
          </div>
          <div>
            <div><img src={react} className="icon-skill" alt="react" /></div>
            <div>React</div>
          </div>
          <div>
            <div><img src={vue} className="icon-skill" alt="vue" /></div>
            <div>Vue</div>
          </div>
          <div>
            <div><img src={mysql} className="icon-skill" alt="mysql" /></div>
            <div>MySQL</div>
          </div>
          <div>
            <div><img src={graphql} className="icon-skill" alt="graphql" /></div>
            <div>GraphQL</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;