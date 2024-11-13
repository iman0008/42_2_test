import React from 'react';
import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input"
            type="text"
            placeholder={placeholder}
        />
    );
};

export default Input;



