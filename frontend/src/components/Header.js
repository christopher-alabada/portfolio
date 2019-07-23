import React from 'react';

import '../styles/Header.css';


const Header = () => {
  return(
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="nav-container">
        <h2 className="christopher"><a href="/">Christopher Alabada</a></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><div class="d-flex flex-row align-items-baseline">résumé<div className="download">&#x21E4;</div></div></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;