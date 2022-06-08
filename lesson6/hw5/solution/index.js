const includes = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
};

const removeDuplicates = arr => {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!includes(unique, arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
};