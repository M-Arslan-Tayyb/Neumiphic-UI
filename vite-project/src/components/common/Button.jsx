import React from 'react';
import './Button.css';

const CustomButton = ({ children, color, bgColor, boxShadowColor, location }) => {
    const style = {
        color: color || 'rgba(0, 0, 0, 0.56)',
        backgroundColor: bgColor || 'white',
        boxShadow: `-4px -4px 8px rgba(255, 255, 255, 0.6), 4px 4px 8px ${boxShadowColor || 'rgba(0, 0, 0, 0.2)'}`,
    };
    return (
        <button
            className={`custom-button ${location ? `custom-button-${location}` : ''}`}
            style={style}
        >
            {children}
        </button>
    )
}

export default CustomButton
