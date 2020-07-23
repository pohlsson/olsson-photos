import React from "react";
import styles from './AlbumGrid.module.scss';

const AlbumGrid = ({photos, className}) => {
    console.log("pasS", process.env.REACT_APP_ADMIN_PASSWORD);
    return (
        <div className={className}>
            {photos.map(photo => (
                <div className={styles.photoSection}>
                    <img src={photo.url} width="500px" className={styles.photo}/>
                    <div className={styles.info}>
                        <h2>{photo.title}</h2>
                        <p>
                            {photo.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AlbumGrid;
