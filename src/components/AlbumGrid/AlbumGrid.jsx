import React, {useEffect, useRef, useState} from "react";
import styles from './AlbumGrid.module.scss';
import {usePhotos} from "../../hooks/usePhotos";
import {getElementsFromList} from "../../utils/list";
import {PhotoSection} from "./PhotoSection/PhotoSection";

const INITIAL_NUM_PHOTOS = 3;

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
