import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import CompanyLogo from '../../assets/icons/company-logo.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51IEf7cIGUjsZvGVzhRkT6eJWiAfF2DsFkdvZVYyRxwHMnQqgQ4mvh4k6EfwoNlADbk084uvEnHivk4jMzUsSrgA900CfudN60q';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                alert('Payment successful!!');
            })
            .catch((error) => {
                console.log('Payment error: ', error);
                alert(
                    'There was an issue with your payment. Please be sure you use the provided credit card.',
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Supremeness Ltd."
            billingAddress
            shippingAddress
            image={CompanyLogo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
