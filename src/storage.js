import {Storage} from 'aws-amplify';
import photoMetadata from './photoMetadata';

const ALBUM_BASE_PATH = 'albums/';

const addPhotoMetaData = async photos => {
    const photosWithMetadata = [];
    for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        const url = await Storage.get(photo.key);
        const fileName = photo.key.split('/')[1];
        photosWithMetadata.push({
            title: photoMetadata[fileName] ? photoMetadata[fileName].title : null,
            description: photoMetadata[fileName] ? photoMetadata[fileName].description : null,
            album: photoMetadata[fileName] ? photoMetadata[fileName].album : null,
            url
        });
    }
    return photosWithMetadata;
};

export const fetchPhotosInAlbums = async () => {
    const filesInAlbums = await Storage.list(ALBUM_BASE_PATH);
    const filteredFilesInAlbum = filesInAlbums.filter(file => file.key.split('/')[1] !== "");
    return await addPhotoMetaData(filteredFilesInAlbum);
};

