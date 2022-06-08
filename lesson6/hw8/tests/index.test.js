import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { cloneArr };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { cloneArr } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию cloneArr', () => {
    expect(cloneArr).toBeDefined();
    expect(cloneArr).toEqual(expect.any(Function));
});

it('ф-ция cloneArr должна вернуть массива', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1200, 0];

    expect(cloneArr(arr)).toEqual(arr);
});

it('ф-ция cloneArr должна вернуть новый массив', () => {
    const arr = [5, 8, 1, -3];

    expect(cloneArr(arr)).not.toBe(arr);
});
