/*

JS100 - JavaScript Basics - Objects

7. Car Keys

Write code that stores all of the vehicle property names in an array called keys.


let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

*/


let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let vehicleKeys = Object.keys(vehicle); 
console.log(vehicleKeys); //[ 'manufacturer', 'model', 'year', 'range', 'seats' ]