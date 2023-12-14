// components/SelectBox.js
import React from 'react';
const SelectBox = ({ options, selectedOption, onChange }) => {
    return (
        <select value={selectedOption} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
