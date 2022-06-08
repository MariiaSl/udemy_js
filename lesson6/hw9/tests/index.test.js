import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { checkSum };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { checkSum } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию checkSum', () => {
    expect(checkSum).toBeDefined();
    expect(checkSum).toEqual(expect.any(Function));
});

it('неверная логика работы ф-ции checkSum', () => {
    const arr = [10, 20, 30];
    expect(checkSum(arr)).toEqual(false);
});

it('неверная логика работы ф-ции checkSum', () => {
    const arr = [10, 20, 30, 100];
    expect(checkSum(arr)).toEqual(true);
});