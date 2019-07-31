import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import history from '../history';
import Header from './Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import Footer from './Footer';
import ReactGA from 'react-ga';


const App = () => {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return(
    <Router history={history}>
      <Header />

      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route component={Page404} />
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
