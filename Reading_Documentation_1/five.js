/*

JS100 - JavaScript Basics > Reading Documention 

5. Out of Bounds

Question: What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.

Answer: Prints 'undefined' to the console. Why? Because it's an invalid index number. That index position doesn't have a value, thus returning undefined. See the Accessing array elements section of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array.
*/

let myArray = ['fish', 'and', 'chips'];

console.log(myArray[10]); // undefined