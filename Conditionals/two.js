/*

JS100 - JavaScript Basics > Conditionals

Exercise 2. Yes? No? Part 1


Problem: 

The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.


let randomNumber = Math.round(Math.random());



*/


let randomNumber = Math.round(Math.random());

if(randomNumber === 1){
	console.log('Yes!')
} else {
	console.log('No.')
}