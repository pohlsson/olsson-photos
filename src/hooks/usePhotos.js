import {useEffect, useState} from "react";
import {fetchPhotosInAlbums} from "../storage";

export const usePhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
               const result = await fetchPhotosInAlbums();
                setPhotos(result);
            } catch (error) {
                setError(error);
            }
        };
        fetch();
    }, []);

    return [photos, error];
};

