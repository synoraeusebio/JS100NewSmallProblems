/*

JS100 - JavaScript Basics-Arrays

9. Travel

The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

 Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(place, travels) {
for (let i = 0; i < travels.length; i += 1) {
  if(travels[i] === place) {
    return true; 
  }
}
  return false; 
}






console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false