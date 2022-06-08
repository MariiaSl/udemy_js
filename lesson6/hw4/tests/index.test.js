import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { uniqueCount };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { uniqueCount } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию uniqueCount', () => {
    expect(uniqueCount).toBeDefined();
    expect(uniqueCount).toEqual(expect.any(Function));
});

it('ф-ция uniqueCount должна вернуть к-во уникадьных чисел в массиве', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(uniqueCount(arr)).toEqual(8);
});
