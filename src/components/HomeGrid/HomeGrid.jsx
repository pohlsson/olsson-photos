import React, {useEffect, useState} from 'react';
import styles from './HomeGrid.module.scss';
import PhotoModal from "./PhotoModal/PhotoModal";
import classNames from 'classnames';
import {generateRows} from "../../utils/photo";
import Photo from "./Photo/Photo";

const HomeGrid = ({photos, className}) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(generateRows(photos))
    }, [photos]);

    const renderRow = row => {
        switch (row.length) {
            case 1:
                return (
                    <Photo className={styles.photo_1} src={row[0]}/>
                );
            case 2:
                return (
                    <>
                        <Photo className={styles.photo_2} src={row[0]}/>
                        <Photo className={styles.photo_2} src={row[1]}/>
                    </>
                );
            case 4:
                return (
                    <>
                        <Photo className={styles.photo_4} src={row[0]}/>
                        <Photo className={styles.photo_4} src={row[1]}/>
                        <Photo className={styles.photo_4} src={row[2]}/>
                        <Photo className={styles.photo_4} src={row[3]}/>
                    </>
                );
            case 5: {
                const bigPhotoIsLeft = Math.random() >= 0.5;
                if(bigPhotoIsLeft) {
                    return (
                        <>
                            <Photo className={styles.photo_2} src={row[0]}/>
                            <div className={styles.rowGrid}>
                                <Photo className={styles.photo_2} src={row[1]}/>
                                <Photo className={styles.photo_2} src={row[2]}/>
                                <Photo className={styles.photo_2} src={row[3]}/>
                                <Photo className={styles.photo_2} src={row[4]}/>
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                            <div className={styles.rowGrid}>
                                <Photo className={styles.photo_2} src={row[0]}/>
                                <Photo className={styles.photo_2} src={row[1]}/>
                                <Photo className={styles.photo_2} src={row[2]}/>
                                <Photo className={styles.photo_2} src={row[3]}/>
                            </div>
                            <Photo className={styles.photo_2} src={row[4]}/>
                        </>
                    )
                }
            }
        }
    };

    return (
        <div className={className}>
            {rows.map((row, index) => (
                <div key={index} className={styles.row}>
                    {renderRow(row)}
                </div>
            ))}
            {selectedPhoto && <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)}/>}
        </div>
    )
};

export default HomeGrid;
