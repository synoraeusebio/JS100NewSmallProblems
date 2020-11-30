/*

JS100 - JavaScript Basics > Reading Documention 2

1. Style Guide

Question: In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.


let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

Answer: 

let ice_cream_taste = 'chocolate';
let ice_cream_density = 10;

while(ice_cream_density > 0) {
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The ' + ice_cream_taste + ' ice cream melted.');


*/



let ice_cream_taste = 'chocolate';
let ice_cream_density = 10;

while(ice_cream_density > 0) {
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The ' + ice_cream_taste + ' ice cream melted.');