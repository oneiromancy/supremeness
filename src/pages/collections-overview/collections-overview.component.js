import React from 'react';
import { useSelector } from 'react-redux';
import './collections-overview.styles.scss';

import {
    selectCollectionsForPreview,
    selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    const isContentLoaded = useSelector(selectIsCollectionsLoaded);

    if (!isContentLoaded) {
        return <Spinner />;
    }

    return (
        <div className="collections-overview">
            {collections?.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
            })}
        </div>
    );
};

export default CollectionsOverview;
