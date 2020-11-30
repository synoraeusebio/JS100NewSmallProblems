/*

JS100 > JavaScript Basics > Strings

7. Blank? Version 1

Write a function that checks whether a string is empty or not. For example:


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

*/


function isBlank(words) {
  if (words === ('')) {
    return true;
  }  else {
    return false;
  }
}
  
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true