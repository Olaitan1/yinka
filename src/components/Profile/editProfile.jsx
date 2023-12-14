import React, { useState, useEffect } from 'react';

const EditProfile = () =>
{
  // State to hold the user data
  const storedUser = localStorage.getItem('user');

  // If user data exists, parse it and set the state
  const [userData, setUserData] = useState({
    fullName: '',
    sector: '',
  });

  // State to hold the user ID
  const [userId, setUserId] = useState(null);

  // Effect to run on component mount to fetch data from localStorage
  useEffect(() =>
  {
    
    // Retrieve user data from localStorage
    if (storedUser)
    {
      const user = JSON.parse(storedUser);
      setUserData(user);
      setUserId(user._id);
    }
  }, [storedUser]);

  // Handler to update user data on input change
  const handleInputChange = (e) =>
  {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler to submit the edited profile to the backend
  const handleSubmit = async () =>
  {
    try
    {
      const response = await fetch(`https://dollartest.onrender.com/api/user/edit/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok)
      {
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('Profile updated successfully:', userData);
        alert('Profile updated successfully')
      } else
      {
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error)
    {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={userData.fullName}
        onChange={handleInputChange}
      />

      <label htmlFor="sector">Sector:</label>
      <input
        type="text"
        id="sector"
        name="sector"
        value={userData.sector}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>Save Changes</button>
      
    </div>
  );
};

export default EditProfile;
