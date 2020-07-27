import {Storage} from 'aws-amplify';
import photoMetadata from './photoMetadata';

const ALBUM_BASE_PATH = 'albums/';

const addPhotoMetaData = async photos => {
    const photosWithMetadata = [];
    for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        const data = photo.key.split('/');
        const fileName = data[2];
        const album = data[1];
        photosWithMetadata.push({
            title: photoMetadata[fileName] ? photoMetadata[fileName].title : null,
            description: photoMetadata[fileName] ? photoMetadata[fileName].description : null,
            album,
            fileName,
        });
    }
    return photosWithMetadata;
};

const albumIsNotEmpty = file => !file.key.split("/").includes("");

export const fetchPhotosInAlbums = async () => {
    const filesInAlbums = await Storage.list(ALBUM_BASE_PATH);
    const filteredFilesInAlbum = filesInAlbums.filter(albumIsNotEmpty);
    return await addPhotoMetaData(filteredFilesInAlbum);
};

