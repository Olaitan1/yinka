// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import { saveUserData, getUserData } from './services/api';

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/profile">
              <Profile onSave={(data) => { saveUserData(data); }} />
            </Route>
            <Route path="/">
              <Home onSave={(data) => { saveUserData(data); }} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
