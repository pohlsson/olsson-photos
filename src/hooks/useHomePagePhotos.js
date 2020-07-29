import {useEffect, useState} from "react";
import {fetchPhotosInHome} from "../storage";

export const useHomePagePhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await fetchPhotosInHome();
                setPhotos(result);
            } catch (error) {
                setError(error);
            }
        };
        fetch();
    }, []);

    return [photos, error];
};

