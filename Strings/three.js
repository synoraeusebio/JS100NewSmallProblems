/*

JS100 > JavaScript Basics > Strings

3. Repeat

Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

repeat(3, 'ha'); // 'hahaha'

*/



function repeat (number, words) {
 let repetitions = '';

  while (number > 0) {
    repetitions = repetitions + words;
    number -= 1;
  }

  return repetitions;
}




console.log(repeat(3, 'ha')); // 'hahaha'


//I worked backwards from the video to understand this. Need to remind myself that loops can be used in instances like this. 