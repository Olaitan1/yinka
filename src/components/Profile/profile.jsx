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
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f2f2f2' }}>
            <p style={{ fontSize: '24px', color: '#333' }}>Hi</p>
            <p style={{ fontSize: '18px', color: '#555' }}>Name: {user.fullName}</p>
            <p style={{ fontSize: '18px', color: '#555' }}>Sector: {user.sector}</p>
            <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '0000ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleEditProfile}
            >
                Edit Profile
            </button>
        </div>
    );

};

export default Profile;
