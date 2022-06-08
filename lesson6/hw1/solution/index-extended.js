function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }
    return squaredArray;
}

module.exports = { squareArray };