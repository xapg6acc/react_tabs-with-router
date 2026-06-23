import React from 'react';
import {
  HashRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import './App.scss';
import { TabsPage } from './TabsPage';

const Home: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </div>
);

const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav className="navbar is-dark mb-4">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-start">
              <NavLink
                exact
                to="/"
                className="navbar-item"
                activeClassName="is-active"
              >
                Home
              </NavLink>
              <NavLink
                to="/tabs"
                className="navbar-item"
                activeClassName="is-active"
              >
                Tabs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tabs/:tabId?" component={TabsPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
