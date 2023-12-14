import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () =>
{
    const navigate = useNavigate();

    const storedUser = localStorage.getItem('user');
    console.log(storedUser);
    const user = JSON.parse(storedUser);

    const handleEditProfile = () =>
    {
        navigate('/edit-profile');
    };

    return (
        <div>
            <p>hi</p>
            <p>Name: {user.fullName}</p>
            <p>Sector: {user.sector}</p>
            <button onClick={handleEditProfile}>Edit Profile</button>
        </div>
    );
};

export default Profile;
