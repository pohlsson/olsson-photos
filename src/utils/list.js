export const getElementsFromList = (list, start, stop) => {
    if(list.length > 0) {
        return list.slice(start, stop);
    }
    return [];
};
