/*

JS100 - JavaScript Basics - Functions 2

6. Remove Last Char

Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'


*/


function removeLastChar(words) {
  let newString = words;
  let newWords = newString.slice(0, newString.length-1);
  return newWords;
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'