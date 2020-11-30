/*

JS100 - JavaScript Basics-Arrays

2. Last Element

Write a function that returns the last element of an input array. For example:


last(['Earth', 'Moon', 'Mars']); // 'Mars'

*/



function last (system) {
  return system[system.length - 1];
}



console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'