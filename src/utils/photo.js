import isMobile from "is-mobile";

const ALLOWED_NUM_PHOTOS_ON_ROW = isMobile() ? [1, 2] : [1, 2, 4, 5];

export const generateRowsRecursive = (rows = [], photosLeft) => {
    if (photosLeft.length === 0) {
        return rows;
    } else {
        let numPhotos =  ALLOWED_NUM_PHOTOS_ON_ROW[Math.floor(Math.random() * ALLOWED_NUM_PHOTOS_ON_ROW.length)];
        while(numPhotos > photosLeft.length) {
            numPhotos = ALLOWED_NUM_PHOTOS_ON_ROW[Math.floor(Math.random() * ALLOWED_NUM_PHOTOS_ON_ROW.length)];
        }
        const photosOnRow = photosLeft.splice(0, numPhotos);
        return generateRowsRecursive([...rows, photosOnRow], photosLeft);
    }
};

export const generateRows = photos => {
    return generateRowsRecursive([], photos);
};

export const paginatePhotos = (photos, pageSize) => {
    const paginatedPhotos = [];
    for(let i = 0; i < photos.length; i += 1) {
        const page = [];
        for(let j = 0; j < pageSize; j += 1) {
            if(i + j < photos.length) {
                page.push(photos[i + j]);
            }
        }
        paginatedPhotos.push(page);
    }
    return paginatedPhotos;
};

export const sortByName = (a, b) => {
    const fileNameA = a.fileName.split(' ');
    const fileNameB = b.fileName.split(' ');
    const numberA = parseInt(fileNameA[fileNameA.length -1], 10);
    const numberB = parseInt(fileNameB[fileNameB.length - 1], 10);
    return numberA - numberB;
};
