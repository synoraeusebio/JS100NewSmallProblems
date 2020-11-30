/*

JS100 - JavaScript Basics > Functions

5. Display Division

Determine the output that the following code will log to the console.


function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;


*/

Answer: Nothing gets printed b/c multiplesOfThree on line 19 is acting like a variable. To use (or invoke) the function on like 19 () is needed after the function name. 