import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './collection.styles.scss';

import {
    selectCollection,
    selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
import Spinner from '../../components/spinner/spinner.component';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const isContentLoaded = useSelector(selectIsCollectionsLoaded);

    if (!isContentLoaded) {
        return <Spinner />;
    }

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
