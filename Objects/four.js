/*

JS100 - JavaScript Basics - Objects

4. Greetings From Jane

Add a property to the below object, jane, so that the codelogs 'Hej, Bobby!' to the console.



let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet('Bobby'); // Hej, Bobby!
*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
   greet: function(name) {
    console.log(`Hej, ${name}!`);
  },
};


console.log(jane.greet('Bobby')); // Hej, Bobby!