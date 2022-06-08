import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { checker };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { checker } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию checker', () => {
    expect(checker).toBeDefined();
    expect(checker).toEqual(expect.any(Function));
});

it('ф-ция checker должна вернуть true, когда сумма min и max больше 1000', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1200, 0];

    expect(checker(arr)).toEqual(true);
});

it('ф-ция checker должна вернуть false, когда сумма min и max не больше 1000', () => {
    const arr = [5, 8, 1, -3, 0, 5, 2, 9, 6, 12, 0];

    expect(checker(arr)).toEqual(false);
});
