// Напишіть функцію, яка створить масив із унікальних значень, які є у кожному з наданих масивів. Використовуйте примітивні типи даних.

const array1 = [12, 42, 5, 86, 12, 5, 41];
const array2 = [13, 5, 12, 98, 3, 23, 5, 12];

function uniqueArr(arr1, arr2) {
  //   const arr1Filtered = arr1.filter((item, index) => {
  //     return arr1.indexOf(item) === index;
  //   });
  //   const arr2Filtered = arr2.filter((item, index) => {
  //     return arr2.indexOf(item) === index;
  //   });
  //   const result = [];
  //   arr1Filtered.forEach((el) => {
  //     arr2Filtered.forEach((el2) => {
  //       if (el === el2) {
  //         result.push(el);
  //       }
  //     });
  //   });
  //   return result;
  //
  //v2
  const arr1Filtered = Array.from(new Set(arr1));
  const arr2Filtered = [...new Set(arr2)];
  const resultArr = arr1Filtered.filter((el) => {
    console.log(el);
    const check = arr2Filtered.includes(el);
    console.log(check);
    return check;
  });
  return resultArr;
}
console.log(uniqueArr(array1, array2));
