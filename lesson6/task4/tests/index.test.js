import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { swap };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { swap } = require(solutionWithExportsPath);

it('функция должна называться swap', () => {
    expect(swap).toBeDefined();
});

it('функция должна возвращать переместить первый элемент исходного массива в конец', () => {
    expect(swap([2, 3, 4, 5, 6])).toEqual([3, 4, 5, 6, 2]);
});

it('массив, переданный как аргумент не должен поменяться', () => {
    const arr = [1, 2, 3];
    swap(arr);

    expect(arr).toEqual([1, 2, 3]);
    expect(swap(arr)).not.toBe(arr);
});
