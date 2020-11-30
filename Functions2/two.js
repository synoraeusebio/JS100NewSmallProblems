/*

JS100 - JavaScript Basics - Functions 2

2. Greet 2


Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

*/


function greet(greeting = "Hello", next = 'world!') {
  console.log(greeting + ", " + next);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

