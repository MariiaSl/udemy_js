import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { createEmptyArray };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { createEmptyArray } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию createEmptyArray', () => {
    expect(createEmptyArray).toBeDefined();
    expect(createEmptyArray).toEqual(expect.any(Function));
});

it('неверная логика работы ф-ции createEmptyArray', () => {
    expect(createEmptyArray(100)).toEqual(new Array(100));
});