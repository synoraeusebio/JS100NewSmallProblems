/*

JS100 - JavaScript Basics > Variable Scope

9. What's my value? (Part 9)

What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

*/

// Nothing gets printed as you're trying to reassign the value of a on line 12 to a const variable.  Has block scope and cnnot be changed via re-assignment. 