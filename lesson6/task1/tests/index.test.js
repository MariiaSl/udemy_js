import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { getArrayBounds };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { getArrayBounds } = require(solutionWithExportsPath);

it('функция должна называться getArrayBounds', () => {
    expect(getArrayBounds).toBeDefined();
});

it('функция должна вернуть массив [длина, первый эл, последний эл]', () => {
    expect(getArrayBounds([1, 6])).toEqual([2, 1, 6]);
    expect(getArrayBounds([1, 6, 4, 5, 2, 1, 5, 6, 8])).toEqual([9, 1, 8]);
});

it('функция должна вернуть null если ей передан не массив', () => {
    expect(getArrayBounds('text')).toEqual(null);
});
