import React from 'react';
import styles from './Photo.module.scss';
import classNames from 'classnames';

const Photo = ({src, className}) => {
    return (
        <>
            <img
                src={src}
                className={classNames(styles.photo, className)}
            />
        </>
    )
};

export default Photo;
