function getSpecialNumbers(from, to) {
    const result = [];
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }

    return result;
}