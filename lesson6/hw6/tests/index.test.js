import path from 'path';
import fs from 'fs';

const solutionPath = path.resolve(__dirname, '../solution/index.js');
const solutionWithExportsPath = path.join(__dirname, '../solution/index-extended.js');

const solutionString = fs.readFileSync(solutionPath);
const exportString = '\nmodule.exports = { withdraw };'
fs.writeFileSync(
    solutionWithExportsPath,
    solutionString + exportString,
    'utf8'
);

const { withdraw } = require(solutionWithExportsPath);

it('файл должен содержать ф-цию withdraw', () => {
    expect(withdraw).toBeDefined();
    expect(withdraw).toEqual(expect.any(Function));
});

it('ф-ция withdraw должна вернуть -1, когда сумма снятия больше баланса', () => {
    const clients = ['client-id-1', 'client-id-2', 'client-id-3'];
    const balances = [17, 6, 78];

    expect(withdraw(clients, balances, 'client-id-3', 500)).toEqual(-1);
});

it('ф-ция withdraw должна вернуть -1, когда сумма снятия больше баланса', () => {
    const clients = ['client-id-1', 'client-id-2', 'client-id-3'];
    const balances = [17, 6, 78];

    expect(withdraw(clients, balances, 'client-id-2', 3)).toEqual(3);
});
