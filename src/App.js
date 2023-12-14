import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './view/Home';
import Profile from '../src/components/Profile/profile';
import { saveUserData } from './service/api';

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

        <Routes>
          <Route path="/profile" element= {<Profile/>}  />
          <Route path="/" element={<Home onSave={(data) => { saveUserData(data); }} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
