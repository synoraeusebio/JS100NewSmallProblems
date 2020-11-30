/*


JS100 - JavaScript Basics > Functions

7. Transformation

Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

*/

function pirates(ship) {
  console.log(ship.replace(ship,'Captain JavaScript'));
}

pirates('Captain Ruby');