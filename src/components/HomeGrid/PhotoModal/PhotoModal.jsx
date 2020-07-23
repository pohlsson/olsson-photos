import React from 'react';
import styles from './PhotoModal.module.scss';

const PhotoModal = ({photo, onClose}) => {
    return (
        <div>
            <div className={styles.overlay}/>
            <div className={styles.photoModal}>
                <div className={styles.photo}>
                    <button className={styles.closeButton} onClick={onClose}>X</button>
                    <img src={photo}/>
                </div>
            </div>
        </div>
    )
};

export default PhotoModal;
