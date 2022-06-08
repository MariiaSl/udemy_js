import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { removeDuplicates };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { removeDuplicates } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию removeDuplicates', () => {
    expect(removeDuplicates).toBeDefined();
    expect(removeDuplicates).toEqual(expect.any(Function));
});

it('ф-ция removeDuplicates должна вернуть вернуть массив без дупликатов', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(removeDuplicates(arr)).toHaveLength(8);
    expect(removeDuplicates(arr)).toEqual(expect.arrayContaining([5, 8, 1, -3, 0, 2, 9, 6]));
});
