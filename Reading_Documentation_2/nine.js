/*

JS100 - JavaScript Basics > Reading Documention 2

9. SyntaxError

Question: Find out how we can join two or more strings together.


The below code raises a SyntaxError. If you run the code, you'll see the following error message:


SyntaxError: Unexpected token &&

Find and read the documentation about this error on MDN. Then, fix the code.


let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


Answer: Something wrong with the syntax of logical AND. Upon looking at the variables in the if statement, parentheses are needed in order for logical AND to compare the values correctly. 

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

*/


let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}