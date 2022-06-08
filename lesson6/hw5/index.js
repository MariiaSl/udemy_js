{
  /* <p>Напишите функцию, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0</p>

<b>Основные требования:</b>
<ol>
    <li>Функция должна называться <code>removeDuplicates(array)</code></li>
    <li>Функция должна вернуть <code>null</code>, если в качестве аргумента передан не массив</li>
    <li>Если аргумент - массив, то функция должна удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0</li>
</ol> */
}

const array = [5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0];

const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const filtered = arr.filter((item, index) => {
    if (arr.indexOf(item) === index) {
      return true;
    }
  });
  return filtered;
};
console.log(removeDuplicates(array));
