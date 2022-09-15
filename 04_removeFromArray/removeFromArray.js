// const removeFromArray = function(arr, num) {
//   const arg1 = Array.from(arr);
//   const index = arg1.indexOf(num);
//   if (index > -1) {
//     arg1.splice(index, 1);
//   }
//   return arg1;
// }

// removeFromArray([1, 2, 3, 4], 3);

// const removeFromArray = function(array, ...args) {
//   return array.filter(x => !args.includes(x));
// }

const removeFromArray = function(array, ...args) {
  args.forEach((arg) => {
    const index = array.indexOf(arg);
    if (index > -1) {
      array.splice(index, 1);
    }
  });
  return array;
}

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
