/*


JS100 - JavaScript Basics > Variable Scope

6. What's my value? (Part 6)

What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

*/

// The second version of b is defined within the block, so it it cannot be accessed outside the block. The code just runs the first version of b, which is false and that's what'll get printed to the console. 