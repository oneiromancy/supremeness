import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import ShoppingCart from '../../assets/icons/shopping-bag.svg';

const CartIcon = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartItemsCount);

    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <img className="shopping-icon" src={ShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
