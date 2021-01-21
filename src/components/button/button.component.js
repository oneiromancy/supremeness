import React from 'react';

import './button.styles.scss';

const Button = ({ children, onClick }) => {
    return (
        <span className="custom-button" onClick={onClick}>
            {children}
        </span>
    );
};

export default Button;
