import {generateRows, paginatePhotos} from "./photo";

describe('photo', () => {

    const ALLOWED_NUM_PHOTOS_ON_ROW = [1, 2, 4, 5];

    it('should generate rows for no photos', () => {
       const photos = [];

       const result = generateRows(photos);

       expect(result).toHaveLength(0);
    });

    it('should generate rows for 1 photo', () => {
        const photos = ['photo1'];

        const result = generateRows(photos);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveLength(1);
    });

    it('should generate rows for 10 photos', () => {
        const photos = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6', 'photo7', 'photo8', 'photo9', 'photo10'];

        const result = generateRows(photos);

        result.forEach(row => {
            expect(ALLOWED_NUM_PHOTOS_ON_ROW.includes(row.length)).toBe(true);
        });
    });

    it('should create pagination for no photos', () => {
        const photos = [];

        const result = paginatePhotos(photos, 4);

        expect(result).toHaveLength(0);
    });

    it('should create pagination for 1 photo', () => {
        const photos = ['photo1'];

        const result = paginatePhotos(photos, 4);

        expect(result).toHaveLength(1);
    });

    it('should create two pages', () => {
        const photos = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'];

        const result = paginatePhotos(photos, 3);

        expect(result).toHaveLength(2);
    });

});
