import React from 'react';

import './button.styles.scss';

const Button = ({ children }) => {
    return <span className="custom-button">{children}</span>;
};

export default Button;
