/*

JS100 - JavaScript Basics - Objects

8. Convert an object to a nested array

Convert the person object into a nested array nestedPerson, containing the same key-value pairs.


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let personArray = Object.entries(person);
console.log(personArray);