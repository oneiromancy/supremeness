import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
    const cartItems = [
        {
            price: 25,
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        },
        {
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            id: 2,
            name: 'Blue Beanie',
            price: 18,
        },
    ];

    const total = cartItems.reduce((prev, curr) => prev.price + curr.price);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">
                <span>TOTAL: £{total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                Example: 4242 4242 4242 4242 - Exp: 12/20 - CVW: 123
            </div>
        </div>
    );
};

export default CheckoutPage;
