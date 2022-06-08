import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { squareArray };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { squareArray } = require(solutionWithExportsPath);

it('функция должна называться squareArray', () => {
    expect(squareArray).toBeDefined();
});

it('функция должна вернуть массив c элементами возведенными в квадрат', () => {
    expect(squareArray([1, 6, -4])).toEqual([1, 36, 16]);
});

it('функция должна вернуть null если ей передан не массив', () => {
    expect(squareArray('text')).toEqual(null);
});

it('исходный массив не должен меняться', () => {
    const arr = [1, 2];
    squareArray(arr);

    expect(squareArray(arr)).not.toBe(arr);
    expect(arr).toEqual([1, 2]);
});
