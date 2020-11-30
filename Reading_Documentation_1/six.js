/*

JS100 - JavaScript Basics > Reading Documention 

6. Property vs Method

Question: What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];

Answer: 
palm tree
palm tree
sequoia


Pop mutates the caller, permanantly changing the array by removing the last element in the called array (trees).


*/

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

console.log(trees[trees.length - 1]); // palm tree
console.log(trees.pop()); // palm tree
console.log(trees[trees.length - 1]); // sequoia

