function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const reversedArray = [];
    for (let el of arr) {
        reversedArray.unshift(el);
    }
    return reversedArray;
}
