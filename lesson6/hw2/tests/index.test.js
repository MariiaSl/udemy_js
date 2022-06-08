import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { reverseArray };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { reverseArray } = require(solutionWithExportsPath);

it('функция должна называться reverseArray', () => {
    expect(reverseArray).toBeDefined();
});

it('функция должна вернуть перевернутый массив', () => {
    expect(reverseArray([1, 6, -4])).toEqual([-4, 6, 1]);
});

it('функция должна вернуть null если ей передан не массив', () => {
    expect(reverseArray('text')).toEqual(null);
});

it('исходный массив не должен меняться', () => {
    const arr = [1, 2];

    expect(reverseArray(arr)).not.toBe(arr);
    expect(arr).toEqual([1, 2]);
});
