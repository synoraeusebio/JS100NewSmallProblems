/*

JS100 - JavaScript Basics > Variable Scope


2. What's my value? (Part 2)

What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello world!';

// Still won't work as let is outside block scope. ReferenceError: Cannot access 'greeting' before initialization is the message thown, so we'll need to place line 12 above line 10. 