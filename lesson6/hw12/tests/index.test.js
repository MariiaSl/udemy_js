import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { getSubArray };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { getSubArray } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию getSubArray', () => {
    expect(getSubArray).toBeDefined();
    expect(getSubArray).toEqual(expect.any(Function));
});

it('ф-ция getSubArray должна вернуть массив', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(getSubArray(arr, 3)).toEqual(expect.any(Array));
});

it('итоговый массив должен содержать указанное число элементов исходного массива', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(getSubArray(arr, 4)).toEqual([5, 8, 1, -3]);
});
