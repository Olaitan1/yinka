import React, { useState, useEffect } from 'react';

const EditProfile = () => {
  // State to hold the user data
  const [userData, setUserData] = useState({
    fullName: '',
    sector: '',
  });

  // Effect to run on component mount to fetch data from localStorage
  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');

    // If user data exists, parse it and set the state
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData(user);
    }
  }, []); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
const userId= 
  // Handler to submit the edited profile to the backend
  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://dollartest.onrender.com/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Optionally, you can update the user data in localStorage after a successful edit
        localStorage.setItem('user', JSON.stringify(userData));

        console.log('Profile updated successfully:', userData);
        // Handle success, show a success message, redirect, etc.
      } else {
        console.error('Failed to update profile:', response.statusText);
        // Handle error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle unexpected errors, show an error message, etc.
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
