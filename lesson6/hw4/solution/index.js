const includes = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
};

const uniqueCount = arr => {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!includes(unique, arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique.length;
};