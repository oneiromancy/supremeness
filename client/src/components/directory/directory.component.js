import React from 'react';
import './directory.styles.scss';

import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />;
            })}
        </div>
    );
};

export default Directory;
