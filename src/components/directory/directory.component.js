import React from 'react';

import sections from '../../data/sections';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />;
            })}
        </div>
    );
};

export default Directory;
