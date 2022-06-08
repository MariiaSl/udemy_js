const getSubArray = (arr, numberOfElements) => {
    const subArray = [];
    for (let i = 0; i < numberOfElements; i++) {
        subArray[i] = arr[i];
    }
    return subArray;
};