/*

JS100 - JavaScript Basics > Variable Scope


5. What's my value? (Part 5)

What will the following code log to the console and why? Don't run it until you have tried to answer.


function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

*/


// This code will not run. The first version of a is fine as it's defined outside the block. The second version of a is within the block so it cannot be accessed. 