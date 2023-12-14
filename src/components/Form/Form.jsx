import React, { useState } from 'react';
import SelectBox from '../SelectBox';
import './form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState('');
  const [agree, setAgree] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

  const handleSave = async () => {
    // Validation logic
    if (!name || !sectors || !agree) {
      alert('All fields are mandatory');
      return;
    }

    // Prepare data for the POST request
    const formData = {
      fullName: name,
      sector: sectors,
    };

    try {
      const response = await fetch('https://dollartest.onrender.com/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created successfully:', data);
        localStorage.setItem('user', JSON.stringify(data.user))
      } else {
        console.error('Failed to create user:', response.statusText);
const errorData = response.data;
                console.log('veSa failed:', errorData.message);

                // Display the error message
                setErrorMessage(errorData.message);      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div 
      className="form-container">
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Registration Form</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <label htmlFor="sectors">Sectors:</label>
      <SelectBox
        id="sectors"
        options={[
          { value: '', label: 'Select Sector' },
          { value: 'IT', label: 'Information Technology' },
          { value: 'Finance', label: 'Finance' },
          // Add more sectors as needed
        ]}
        selectedOption={sectors}
        onChange={(e) => setSectors(e.target.value)}
      />

      <div>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span>Agree to terms</span>
        </label>
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Form;
