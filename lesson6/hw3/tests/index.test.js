import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { sortAsc, sortDesc };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { sortAsc, sortDesc } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию sortAsc', () => {
    expect(sortAsc).toBeDefined();
    expect(sortAsc).toEqual(expect.any(Function));
});

it('файл должен содержать ф-цию sortDesc', () => {
    expect(sortDesc).toBeDefined();
    expect(sortDesc).toEqual(expect.any(Function));
});

it('ф-ция sortAsc должна сортировать входящий массив по возрастанию', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9];
    expect(sortAsc(arr)).toEqual([-3, 0, 1, 2, 5, 5, 8, 9]);
});

it('ф-ция sortDesc должна сортировать входящий массив по убыванию', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9];
    expect(sortDesc(arr)).toEqual([-3, 0, 1, 2, 5, 5, 8, 9].reverse());
});
