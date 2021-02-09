import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CompanyLogo from '../../assets/icons/company-logo.png';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Navbar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

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
                    <Link
                        className="option-link"
                        onClick={() => dispatch(signOutStart())}
                    >
                        SIGN OUT
                    </Link>
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
