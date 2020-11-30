/*

JS100 - JavaScript Basics-Arrays

5. Filter

Count the number of elements in scores that are 100 or above.


let scores = [96, 47, 113, 89, 100, 102];

*/


let scores = [96, 47, 113, 89, 100, 102];
let newScore = 0; 

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    newScore += 1; 
  }
}
  
  console.log(newScore);


  //worked backwards from the solution to understand this one. Got it now!
  