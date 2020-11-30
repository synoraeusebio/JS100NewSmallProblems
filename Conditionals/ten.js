/*


JS100 - JavaScript Basics > Conditionals

Exercise 10. Are we moving?

Problem: 

Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;


*/


Answer: isMoving returns true even without the parentheses but I think it's needed for operator presendence. 