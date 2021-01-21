import React from 'react';
import { useHistory } from 'react-router-dom';
import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const cartItems = [];

    const history = useHistory();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

export default CartDropdown;