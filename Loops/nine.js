/*

JS101 Exercises - Loops

Exercise Nine: Finding Nemo

Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];



*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];


for (let i = 0; i , fish.length; i += 1) {
	console.log(fish[i]);
	
	if (fish[i] === 'Nemo') {
	break;
	}
}