import React from "react";
import styles from './AlbumGrid.module.scss';
import {usePhotos} from "../../hooks/usePhotos";
import {PhotoSection} from "./PhotoSection/PhotoSection";

const AlbumGrid = ({album,  className}) => {

    const [photos, errors] = usePhotos();

    return (
        <div className={className}>
            <div className={styles.albumBackground} />
            {photos.map(photo => <PhotoSection key={photo.fileName} photo={photo} last />)}
        </div>
    )
};

export default AlbumGrid;
