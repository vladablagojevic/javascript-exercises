const repeatString = function(string, num) {
  let repeatedString = '';
  
  while (num > 0) {
    repeatedString += string;
  num--;
  }

  if (num < 0) {
    return "ERROR";
  }
  
  return repeatedString;
};

// function repeatString(string, num) {
//   if num < 0) 
//     return "";
//   if num === 1) 
//     return string;
//   else 
//     return string + repeatString(string, num - 1);
// }

// function repeatString(string, num) {
//   if  num > 0)
//     return string.repeat num);
//   else
//     return "";
// }

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
