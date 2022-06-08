import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { increaseEvenEl };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { increaseEvenEl } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию increaseEvenEl', () => {
    expect(increaseEvenEl).toBeDefined();
    expect(increaseEvenEl).toEqual(expect.any(Function));
});

it('ф-ия должна вернуть null, если в качестве первого аргумента передан не массив', () => {
    expect(increaseEvenEl(10, -10)).toEqual(null);
});

it('неверная логика работы ф-ции increaseEvenEl', () => {
    expect(increaseEvenEl([10, 20, 30], 20)).toEqual([30, 40, 50]);
});

it('неверная логика работы ф-ции increaseEvenEl', () => {
    expect(increaseEvenEl([10, 20, 30, 100], -10)).toEqual([0, 10, 20, 90]);
});