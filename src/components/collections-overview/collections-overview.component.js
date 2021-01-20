import React from 'react';
import './collections-overview.styles.scss';

import collections from '../../data/collections-products';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
            })}
        </div>
    );
};

export default CollectionsOverview;
