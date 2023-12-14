// views/Profile.js
import React, { useState } from 'react';
import Form from '../components/Form';

const Profile = ({ onSave }) => {
    const [user, setUser] = useState({
        name: 'John Doe',
        sectors: 'IT',
        agree: true,
    });

    return (
        <div>
            <h2>Profile</h2>
            <Form onSave={(data) => { onSave(data); setUser(data); }} user={user} />
        </div>
    );
};

export default Profile;
