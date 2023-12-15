import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './view/Home';
import Profile from '../src/components/Profile/profile';
// import { saveUserData } from './service/api';
import EditProfile from '../src/components/Profile/editProfile'

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
          <Route path="/edit-profile" element= {<EditProfile/>}  />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
