import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-12">
          <div className="row justify-content-between">
            <div className="col-md-4 title sub">
              <div className="d-flex align-items-center flex-row mb-1">
                <img src={require('../images/email.png')} className="footer-icon" alt="email" />
                <div className="footer-icon-text">
                  <a href="mailto:chris@topher.la?subject=Message%20From%20http://chris.topher.la">chris@topher.la</a>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row mb-1">
                <img src={require('../images/linkedin.png')} className="footer-icon" alt="linkedin" />
                <div className="footer-icon-text"><a href="https://www.linkedin.com/in/christopher-alabada/">linkedin.com/in/christopher.alabada</a></div>
              </div>
              <div className="d-flex align-items-center flex-row mb-1">
                <img src={require('../images/github.png')} className="footer-icon github-icon" alt="github" />
                <div className="footer-icon-text"><a href="https://github.com/christopher-alabada">github.com/christopher.alabada</a></div>
              </div>
            </div>
            <div className="col-md-4 title sub">
              This portfolio was created with Docker, React, Node, Express, and MongoDB.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;