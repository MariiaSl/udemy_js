{
  /* <ol>
  <li>
    Функция должна называться <code>reverseArray</code>
  </li>
  <li>
    Функция должна вернуть <code>null</code>, если в качестве аргумента передан
    не массив
  </li>
  <li>
    Если аргумент - массив, то функция должна вернуть массив, где первый элемент
    стал последним, второй предпоследний, ... , последний - первым
  </li>
  <li>Исходный массив не должен поменяться</li>
</ol>; */
}

const array = [1, 23, 4, 121, 2, 56, 22];
const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  //var1
  // return (reversedArr = [...arr].reverse());
  //var2
  //return (reversedArr = arr.slice().reverse());
  const sliced = arr.slice();
  const reversedArr = sliced.reverse();
  return reversedArr;

  // ;((((
  // const reversedArray = [];
  // for (let el of arr) {
  //   reversedArray.unshift(el);
  // }
  // return reversedArray;
};
console.log(reverseArray(array));
console.log(array);
