import React from 'react';
import styles from './Photo.module.scss';
import classNames from 'classnames';

const Photo = ({src, className}) => {
    console.log(src)
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
