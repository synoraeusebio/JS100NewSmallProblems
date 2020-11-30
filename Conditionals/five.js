/*

JS100 - JavaScript Basics > Conditionals


Exercise 5: Switch

Problem: 
Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.


*/


let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*

neigh
tweet tweet
*cricket*

are what's printed to the console-the break statement is missing which explains why line 25 and 27 are printed
