const array = [1, 23, 4, 121, 2, 56, 22];
const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (arrSquared = arr.map((elem) => elem * elem));
};
console.log(squareArray(array));
console.log(array);
