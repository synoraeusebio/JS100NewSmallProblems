/*

JS100 - JavaScript Basics-Arrays

1. First Element

Write a function that returns the first element of an input array. For example:


first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?

*/

function first(system) {
  return system[0];
}

first(['Earth', 'Moon', 'Mars']); // Earth


/*
function will return undefined if array is empty

function first(system) {
  return system[0];
}



console.log(first([])); // undefined