/*

JS100 - JavaScript Basics - Functions 2

5. Calculate Cat Age

Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
For example:


catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

*/

function catAge(age) {
  if (age === 0) {
    return 0; 
  } else if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 24; 
  } else if (age === 3) {
    return 28;
  } else if (age === 4){
    return 32; 
  } else {
    return 24 + (age - 2) * 4; 
  }
}





console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
console.log(catAge(5)); // 36
console.log(catAge(6)); // 40


// involived math to calculate the subsequent years...not my fav tbh