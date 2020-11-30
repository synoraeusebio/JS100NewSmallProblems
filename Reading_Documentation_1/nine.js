/*

JS100 - JavaScript Basics > Reading Documention 

2. Method Chaining

Question: Given the following tweet:


let tweet = 'Starting to get the hang of it... #javascript #launchschool';
What will the following statements evaluate to?


tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');

Reference the documentation to learn about the return value of each method.

Answer:

tweet.split(' ');
[
  'Starting',
  'to',
  'get',
  'the',
  'hang',
  'of',
  'it...',
  '#javascript',
  '#launchschool'
]

tweet.split(' ').reverse();
[
  '#launchschool',
  '#javascript',
  'it...',
  'of',
  'hang',
  'the',
  'get',
  'to',
  'Starting'
]


tweet.split(' ').reverse().join(' ');
#launchschool #javascript it... of hang the get to Starting

Split string method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Reverse array method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Join array method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


*/


let tweet = 'Starting to get the hang of it... #javascript #launchschool';



console.log(tweet.split(' ')); // splits string into array
console.log(tweet.split(' ').reverse()); // splits the string into an array, and reverses the order of the array's element
console.log(tweet.split(' ').reverse().join(' ')); // splits the string into an array, reverses the order of the array's element, and then joins them to form a string again. 

