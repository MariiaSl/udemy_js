const array = [2, 5, 6, 76, 54, 34];
const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  // const cloned = arr.map((a) => a);
  // return cloned;
  // return [...arr];
  const clone = arr.slice(0);
  return clone;
};
console.log(cloneArr(array));
