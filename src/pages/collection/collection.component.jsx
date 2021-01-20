import React from 'react';
import { useParams } from 'react-router-dom';
import './collection.styles.scss';

import collections from '../../data/collections-products';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = collections.find((item) => {
        if (collectionId === item.routeName) {
            return item;
        }
    });

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items?.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;
