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

//return statement

function getEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(getEvenOdd(232));
