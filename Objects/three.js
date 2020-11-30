/*

JS100 - JavaScript Basics - Objects

3. Add a Property

Below is a simple object representing our dog, Fido. On lines 17 and 18, write code to add properties 'age' and 'favorite food' to the fido object.


let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

*/

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido['age'] = 10;
// Add property 'favorite food'.
fido['favorite food'] = 'bacon'; 

console.log(fido);