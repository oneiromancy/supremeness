import React from 'react';
import './directory.styles.scss';

import collections from '../../data/collections-meta';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
    return (
        <div className="directory-menu">
            {collections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />;
            })}
        </div>
    );
};

export default Directory;
