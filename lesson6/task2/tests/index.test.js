import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { getSum };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { getSum } = require(solutionWithExportsPath);

it('функция должна называться getSum', () => {
    expect(getSum).toBeDefined();
});

it('функция должна вернуть сумму элементов массива', () => {
    expect(getSum([1, 6, -1])).toEqual(6);
});

it('функция должна вернуть null если ей передан не массив', () => {
    expect(getSum('text')).toEqual(null);
});
