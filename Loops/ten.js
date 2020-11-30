/*

JS101 Exercises - Loops

Exercise 10: Do...While

What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.


Code Snippet 1:

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


In this snippet, 'Woooot!' may or may not be printed to the console. It depends on if the condition is truthy or falsy. 
In this case, it will not. 










Code Snippet 2:

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);


In this snippet, the code gets executed at least one time before checking the condition. 