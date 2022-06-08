// // simple function

// function getSum(a, b) {
//   console.log(a + b);
// }
// getSum(2, 4);

// //fumction args
// function sayHi(name, anotherName = "noname") {
//   console.log(arguments);
//   const greetings = `Hi, ` + name + ` and ` + anotherName;
//   console.log(greetings);
// }
// sayHi("Tom", "Bob");

// return statement

// function getEvenOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// }
// // eslint-disable-next-line no-console
// console.log(getEvenOdd(232));

const array = [2, 5, 6, 8, 11, 9, 4];

const increaseEventEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.map((item) => {
    if (item % 2 === 0) {
      item += delta;
    }
    return item;
  });
  return result;
};

console.log(increaseEventEl(array, 20));
// 0: 22
// 1: 5
// 2: 26
// 3: 28
// 4: 11
// 5: 9
// 6: 24
