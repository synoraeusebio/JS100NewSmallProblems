/*

JS100 - JavaScript Basics > Variable Scope

7. What's my value? (Part 7)

What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// 1 should be logged to the console. The variable a has global scope since it's defined outside the block. 