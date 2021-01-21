import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
    children,
    onClick,
    isButtonInverted,
    isGoogleSignIn,
}) => {
    return (
        <button
            onClick={onClick}
            className={`custom-button 
            ${isButtonInverted && 'invertedButtonStyles'} ${
                isGoogleSignIn && 'googleSignInStyles'
            }
            `}
        >
            {children}
        </button>
    );
};

export default CustomButton;
