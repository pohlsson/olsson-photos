import {useEffect, useState} from "react";
import {fetchPhotos} from "../storage";

export const usePhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
               const result = await fetchPhotos();
                setPhotos(result);
            } catch (error) {
                setError(error);
            }
        };
        fetch();
    }, []);

    return [photos, error];
};

