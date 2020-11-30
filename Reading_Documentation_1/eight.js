/*

JS100 - JavaScript Basics > Reading Documention 

8. Return Values

Consider the following code snippet:


let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;
What will the following statements return?


typeof tweet;
typeof words;
typeof isValid;

Answer: 

string
object
boolean

*/





let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

// checking output of the two variables
console.log(words);
console.log(isValid);


console.log(typeof tweet); // string
console.log(typeof words); // object
console.log(typeof isValid); // boolean