/*

JS100 - JavaScript Basics > Variable Scope


3. What's my value? (Part 3)

What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

*/

// An error will occur since myValue has block scope and isn't access able outside the block. To make the variable accessable, you'd need to refractor the code like this: 

if (true) {
  let myValue = 20;
   console.log(myValue);
}