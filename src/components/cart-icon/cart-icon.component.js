import React from 'react';
import './cart-icon.styles.scss';
import ShoppingCart from '../../assets/icons/shopping-bag.svg';

const CartIcon = () => {
    const itemCount = 0;

    return (
        <div className="cart-icon">
            <img className="shopping-icon" src={ShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
