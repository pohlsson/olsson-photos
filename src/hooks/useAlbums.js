import {useEffect, useState} from "react";
import {fetchAlbums} from "../storage";

export const useAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await fetchAlbums();
                setAlbums(result);
            } catch (error) {
                setError(error);
            }
        };
        fetch();
    }, []);

    return [albums, error];
};

