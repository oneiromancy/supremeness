import React from 'react';
import './collection-item.styles.scss';

import Button from '../button/button.component';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button className="custom-button">Add to cart</Button>
        </div>
    );
};

export default CollectionItem;
