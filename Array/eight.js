/*

JS100 - JavaScript Basics-Arrays

8. Type

How can you check whether a variable holds a value that is an array? 
For example, imagine you start writing a function and want to check whether its argument is an array:


function filter(input) {
  // Is input an array?
}

*/

// Array.isArray() method can be used


// Example code 

function filter(input) {
	console.log(Array.isArray(input));
}

filter([2, 4, 6, 8]); // true
filter('Hello World!'); // false