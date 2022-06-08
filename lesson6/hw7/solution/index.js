const getMin = arr => {
    let min = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
};

const getMax = arr => {
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

const checker = arr => getMin(arr) + getMax(arr) > 1000;