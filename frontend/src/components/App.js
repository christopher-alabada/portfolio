import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import history from '../history';
import Header from './Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Footer from './Footer';


const App = () => {
  return(
    <Router history={history}>
      <Header />

      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:name" exact component={Project} />
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
