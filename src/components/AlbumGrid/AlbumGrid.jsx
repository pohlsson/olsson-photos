import React from "react";
import styles from './AlbumGrid.module.scss';

const CLOUDFRONT_BASE_PATH = 'http://d20nvzox00abva.cloudfront.net/public/albums/';

const AlbumGrid = ({photos, album,  className}) => {
    return (
        <div className={className}>
            {photos.map(photo => (
                <div className={styles.photoSection}>
                    <img
                        src={CLOUDFRONT_BASE_PATH + album + "/" + photo.fileName}
                        width="500px"
                        className={styles.photo}
                    />
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
