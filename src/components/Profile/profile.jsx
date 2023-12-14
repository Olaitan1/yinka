import React from 'react';

const Profile = () =>
{
    const storedUser = localStorage.getItem('user');
console.log(storedUser)
    const user = JSON.parse(storedUser);


    return (
        <div>
            <p>hi</p>
            <p>Name: {user.fullName}</p>
            <p>Sector: {user.sector}</p>
        </div>
    );
};

export default Profile;
