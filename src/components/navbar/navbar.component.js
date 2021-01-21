import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

// This is a special syntax in React for importing SVG
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CompanyLogo from '../../assets/icons/company-logo.png';

const Navbar = () => {
    const currentUser = false;
    let hidden = true;

    return (
        <div className="navbar-container">
            <Link to="/">
                <img className="logo-icon" src={CompanyLogo} />
            </Link>
            <div className="options-container">
                <Link className="option-link" to="/shop">
                    SHOP
                </Link>
                <Link className="option-link" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <Link className="option-link">SIGN OUT</Link>
                ) : (
                    <Link className="option-link" to="/signin">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    );
};

export default Navbar;
