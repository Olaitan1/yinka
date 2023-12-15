// views/Home.js
import React, { useState } from 'react';
import Form from '../components/Form/Form';

const Home = ({ onSave }) => {
    const [user, setUser] = useState(null);

    return (
  <div style={{ paddingLeft: '20px' }}>
            <h2>Home</h2>
            <Form onSave={(data) => { onSave(data); setUser(data); }} user={user} />
        </div>
    );
};

export default Home;
