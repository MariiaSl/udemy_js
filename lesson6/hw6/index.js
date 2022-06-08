{
  /* <p>Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1</p>

<p>Считаем что в массиве <code>clients</code> хранятся имена клиентов, а в массиве <code>balances</code> - балансы их счетов соответственно. То есть у клиента по индексу 2 с массива <code>clients</code>, баланс счета - это значение по индексу 2 с массива balances</p>

<p>На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие)</p>

Основные требования:
<ol>
    <li>Функция должна называться <code>withdraw(clients, balances, client, amount)</code></li>
    <li>Функция должна снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1 (деньги в этом случае не должны быть сняты)</li>
</ol>
<br>
<br>
Пример работы:
<br>
Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
<br>
Output: 37 (и массив balances должен быть [1400, 37, -6])
<br>
<br>
Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
<br>
Output: -1 (и массив balances должен быть [1400, 87, -6]) */
}

const withdraw = (clients, balances, client, amount) => {};
