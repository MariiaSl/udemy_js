import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { includes };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { includes } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию includes', () => {
    expect(includes).toBeDefined();
    expect(includes).toEqual(expect.any(Function));
});

it('ф-ция includes должна вернуть false, если число не входит в массив', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(includes(arr, 123)).toEqual(false);
});

it('ф-ция includes должна вернуть true, если число входит в массив', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];
    expect(includes(arr, 9)).toEqual(true);
});
