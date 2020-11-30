/*

JS100 - JavaScript Basics > Reading Documention 2

10. Style Guide

Question: TypeError


Run the following code.


let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

You'll see that it raises an error:


TypeError: tweet.length is not a function

Check the documentation of both TypeError and length, in order to find out what causes the error.

Answer: tweet.length() is the incorrect syntax because .length()isn't a method but a property. We need tweet.length to return a number to see if it's greater than 140. 


*/



