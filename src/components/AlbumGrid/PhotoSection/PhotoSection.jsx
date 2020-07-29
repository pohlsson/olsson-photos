import styles from "./PhotoSection.module.scss";
import React, {useEffect, useRef} from "react";
import {CLOUDFRONT_BASE_PATH} from "../../../constants/clodfront";

export const PhotoSection = ({photo, onScrollDown}) => {

    return (
        <div className={styles.photoSection}>
                <img
                    src={CLOUDFRONT_BASE_PATH + 'albums/' + photo.album + "/" + photo.fileName}
                    width="500px"
                    alt=""
                    className={styles.photo}
                />
            <div className={styles.info}>
                <h2>{photo.title}</h2>
                <p>
                    {photo.description}
                </p>
            </div>
        </div>
    )
};
