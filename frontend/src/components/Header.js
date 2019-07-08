import React from 'react';

import '../styles/Header.css';

const Header = () => {
  return(
    <div className="header">
      <div><h1><a href="/">Christopher Alabada</a></h1></div>
      <div className="header-menu">
        <div><a href="/about">about</a></div>
        <div><a href="/projects">projects</a></div>
        <div><a href="/contact">contact</a></div>
      </div>
    </div>
  );
};

export default Header;