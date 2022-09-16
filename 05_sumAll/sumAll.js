const sumAll = function(num1, num2) {

  // if (typeof num1 != Number || typeof num2 != Number) {
  //   return "ERROR";
  // }

  let lower = Math.min(num1, num2);
  let upper = Math.max(num1, num2);

  let total = 0;
  
  for (let i = lower; i <= upper; i++) {
    total += i;
  }

  if (total < 0) {
    return "ERROR";
  }

  return total;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
