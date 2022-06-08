import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { getSpecialNumbers };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { getSpecialNumbers } = require(solutionWithExportsPath);

it('функция должна называться getSpecialNumbers', () => {
    expect(getSpecialNumbers).toBeDefined();
});

it('функция должна вернуть сумму элементов массива', () => {
    expect(getSpecialNumbers(10, 20)).toEqual([12, 15, 18]);
});
