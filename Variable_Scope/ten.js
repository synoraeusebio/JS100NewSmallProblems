/*

JS100 - JavaScript Basics > Variable Scope

10. What's my value? (Part 10)

What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

*/

// I had to work backwards on this. While const variables cannot be changed via re-assignment, their values can me mutated. 