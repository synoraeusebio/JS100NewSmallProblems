/*


JS100 - JavaScript Basics > Conditionals

Exercise 9. Logical Conditions 3

Problem: 

Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);


*/

$3.99 is printed to the console. !sale returns false (the opposite of the value of the variable sale), so it evaluates the false(else value) of 3.99.