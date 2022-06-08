// ## Условие ##
// Напишите функцию, которая будет находить количество уникальных чисел в массиве

// Основные требования:
// <ol>
//   <li>Напишите функцию <code>uniqueCount</code>, которая принимает массив чисел, как единственный аргумент</li>
//   <li>Функция должна вернуть <code>null</code>, если в качестве аргумента передан не массив</li>
//   <li>Функция <code>uniqueCount</code> должна находить количество уникальных чисел в массиве. Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. Длина массива > 0</li>
// </ol>
// <br>
// Пример работы:
// <br>
// Input: uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])
// <br>
// Output: 4

const array = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];

const uniqueCount = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const filtered = arr.filter((item, index) => {
    if (arr.indexOf(item) === index) {
      return true;
    }
  });

  return filtered.length;
};
console.log(uniqueCount(array));
