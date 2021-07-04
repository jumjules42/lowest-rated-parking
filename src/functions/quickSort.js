function quickSort(array) {
    const media = Math.floor(array.length / 2);
    const pivot = array[media];
    let lowers = [];
    let highers = [];

    lowers = array.filter((el) => el < pivot);
    highers = array.filter((el, index) => el >= pivot && index !== media);

    if (lowers.length > 0 && highers.length > 0) {
        return quickSort(lowers).concat(pivot).concat(quickSort(highers));
    } else if (lowers.length > 0 && highers.length === 0) {
        return quickSort(lowers).concat(pivot);
    } else if (lowers.length === 0 && highers.length > 0) {
        const newArray = quickSort(highers);
        newArray.unshift(pivot);
        return newArray;
    } else {
        return array;
    }
}

export default quickSort;
