import styles from "./PhotoSection.module.scss";
import React, {useEffect, useRef} from "react";
import LazyLoad from 'react-lazyload';

const CLOUDFRONT_BASE_PATH = 'http://d20nvzox00abva.cloudfront.net/public/albums/';

export const PhotoSection = ({photo, onScrollDown}) => {

    const scrollRef = useRef();

    useEffect(() => {
        if (onScrollDown) {
            onScrollDown(scrollRef.current?.getBoundingClientRect().top);
        }
    }, [onScrollDown]);

    useEffect(() => {
        const handleScroll = () => {
            const top = scrollRef.current ? scrollRef.current.getBoundingClientRect().top : 0;
            onScrollDown(top);
        };

        if (onScrollDown) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={styles.photoSection} ref={scrollRef}>
            <LazyLoad>
                <img
                    src={CLOUDFRONT_BASE_PATH + photo.album + "/" + photo.fileName}
                    width="500px"
                    alt=""
                    className={styles.photo}
                />
            </LazyLoad>
            <div className={styles.info}>
                <h2>{photo.title}</h2>
                <p>
                    {photo.description}
                </p>
            </div>
        </div>
    )
};
