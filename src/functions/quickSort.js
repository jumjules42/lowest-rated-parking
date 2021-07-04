function quickSortByRating(array) {
    const media = Math.floor(array.length / 2);
    const pivot = array[media].rating;
    let lowers = [];
    let highers = [];

    lowers = array.filter((el) => el.rating < pivot);
    highers = array.filter(
        (el, index) => el.rating >= pivot && index !== media
    );

    if (lowers.length > 0 && highers.length > 0) {
        return quickSortByRating(lowers)
            .concat(array[media])
            .concat(quickSortByRating(highers));
    } else if (lowers.length > 0 && highers.length === 0) {
        return quickSortByRating(lowers).concat(array[media]);
    } else if (lowers.length === 0 && highers.length > 0) {
        const newArray = quickSortByRating(highers);
        newArray.unshift(array[media]);
        return newArray;
    } else {
        return array;
    }
}

export default quickSortByRating;
