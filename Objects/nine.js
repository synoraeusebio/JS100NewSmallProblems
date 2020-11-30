/*

JS100 - JavaScript Basics - Objects

9. ...and vice versa

Write code that does the reverse, starting from a nested array of pairs and building an object.


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


console.log(Object.fromEntries(nestedArray)); //{ title: 'Duke', name: 'Nukem', age: 33 }