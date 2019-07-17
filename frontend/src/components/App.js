import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import history from '../history';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';


const App = () => {
  return(
    <div>
      <Router history={history}>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:name" exact component={Project} />
          <Route path="/contact" exact component={Contact} />
        </Switch>        
      </Router>
    </div>
  );
};

export default App;
