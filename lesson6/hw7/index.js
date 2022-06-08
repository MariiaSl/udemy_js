/*
## Заголовок ##
Мин/макс массива

## Условие ##
eslint-disable-next-line max-len
<p>Напишите функцию, которая будет суммировать макс и мин элементы массив,
и возвращать <code>true</code> если сумма больше <code>1000</code>,
и <code>false</code> в другом случае</p>

<b>Основные требования:</b>
<ol>
    <li>Функция должна называться <code>checker(arr)</code></li>
    <li>Функция должна вернуть <code>null</code>, если в качестве аргумента передан не массив</li>
    <li>Если аргумент - массив, то функция должна суммировать макс и мин
    элементы массив, и возвращать <code>true</code> если сумма больше
     <code>1000</code>, и <code>false</code> в другом случае</li></ol>
*/

const array = [-1, 2, 3, 44, 121, 45, 21, 13];
const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrMax = Math.min(...arr);
  const arrMin = Math.max(...arr);

  const result = arrMax + arrMin;
  return result;
};
console.log(checker(array));
