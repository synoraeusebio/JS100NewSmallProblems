/*

JS100 - JavaScript Basics > Variable Scope

8. What's my value? (Part 8)

What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// The variable b technially has global scope since it's defined outside the block, so 2 should be printed to the console. 
//Update: I think I was wrong about "why" 2 gets printed, even though my answer is correct. I'll read up more on variable shadowing. 