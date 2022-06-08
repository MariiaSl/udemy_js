function swap(numbers) {
    const [start, ...rest] = numbers;

    return [...rest, start];
}
module.exports = { swap };