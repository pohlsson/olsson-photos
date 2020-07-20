const isMobileDevice = () => {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
};

const ALLOWED_NUM_PHOTOS_ON_ROW = isMobileDevice() ? [1, 2] : [1, 2, 4, 5];

export const generateRows = (rows = [], photosLeft) => {
    if (photosLeft.length === 0) {
        return rows;
    } else {
        let numPhotos =  ALLOWED_NUM_PHOTOS_ON_ROW[Math.floor(Math.random() * ALLOWED_NUM_PHOTOS_ON_ROW.length)];
        while(numPhotos > photosLeft.length) {
            numPhotos = ALLOWED_NUM_PHOTOS_ON_ROW[Math.floor(Math.random() * ALLOWED_NUM_PHOTOS_ON_ROW.length)];
        }
        const photosOnRow = photosLeft.splice(0, numPhotos);
        return generateRows([...rows, photosOnRow], photosLeft);
    }
};
