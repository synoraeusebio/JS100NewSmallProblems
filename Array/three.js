/*

JS100 - JavaScript Basics-Arrays

3. Add + Delete

We are given the following array of energy sources.


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(0, 1);

console.log(energy); // a check to make sure fossil has been removed from the array

energy.push('geothermal');

console.log(energy); // a check to make sure 'geothermal' has been added to the end of the array
