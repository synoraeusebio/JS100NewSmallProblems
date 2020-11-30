/*

JS100 - JavaScript Basics > Variable Scope


4. What's my value? (Part 4)

What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

*/


// The variable a is created within the function but outside the if block, so this makes it accessable both within and outside the block. Thus, 1 is printed to the console. 

