import {Storage} from 'aws-amplify';

const PHOTO_FOLDER_NAME = 'photos';

const getPhotoFileNames = photos => photos.filter(photo => photo.key.split('/')[1]);

const fetchPhotosByName = async photos => {
    return await Promise.all(photos.map(photo => Storage.get(photo.key)))
};

export const fetchPhotos = async () => {
    const photoList = await Storage.list(PHOTO_FOLDER_NAME);
    return await fetchPhotosByName(getPhotoFileNames(photoList))
};
