// components/Form.js
import React, { useState, useEffect } from 'react';
import SelectBox from './SelectBox';

const Form = ({ onSave, user }) => {
    const [name, setName] = useState(user ? user.name : '');
    const [sectors, setSectors] = useState(user ? user.sectors : '');
    const [agree, setAgree] = useState(user ? user.agree : false);

    useEffect(() => {
        if (user) {
            // Populate form fields if user data is available
            setName(user.name);
            setSectors(user.sectors);
            setAgree(user.agree);
        }
    }, [user]);

    const handleSave = () => {
        // Validation logic
        if (!name || !sectors || !agree) {
            alert('All fields are mandatory');
            return;
        }

        // Save data to database (simulated)
        onSave({ name, sectors, agree });
    };

    return (
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Sectors:</label>
            <SelectBox
                options={[
                    { value: 'IT', label: 'Information Technology' },
                    { value: 'Finance', label: 'Finance' },
                    // Add more sectors as needed
                ]}
                selectedOption={sectors}
                onChange={(e) => setSectors(e.target.value)}
            />

            <label>
                <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                Agree to terms
            </label>

            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Form;
