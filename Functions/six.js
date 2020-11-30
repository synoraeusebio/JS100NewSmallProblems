/*


JS100 - JavaScript Basics > Functions

6. Three-way comparison

Write a function that compares the length of two strings.
 It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

*/






function compareByLength(stringOne, stringTwo) {
  if (stringOne.length < stringTwo.length) {
    console.log( -1);
  } else if (stringOne.length > stringTwo.length) {
    console.log(1); 
  } else { 
    console.log(0);
  }
}



compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');