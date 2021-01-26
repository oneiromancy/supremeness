import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default ShopPage;
