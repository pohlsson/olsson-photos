import React from 'react';
import styles from './Photo.module.scss';
import classNames from 'classnames';

const Photo = ({src, className}) => {
    return (
        <div className={classNames(styles.photoWrapper, className)}>
            <div className={styles.overlay} />
            <img src={src} className={className} />
        </div>
    )
};

export default Photo;
