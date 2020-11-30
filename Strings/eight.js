/*

JS100 > JavaScript Basics > Strings

8. Blank? Version 2

Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

*/

function isBlank(words) {
  if (words === ('')) {
    return true;
  }  else if (words === ('   ')) {
    return true;
  }  else{
    return false;
    }
}
  
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true