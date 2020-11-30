/*

JS101 Exercises - Loops


Exercise Seven: And on and on and on

The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

for (let i = 0; ; i += 1) {
  console.log("and on");
}


Answer: There's no condition for this loop to evaluate. 

for (let i = 0; i <= 10; i += 1) {
  console.log("and on");
}

*/



// code refractured to add condition statement to prevent infinite loop
for (let i = 0; i <= 10; i += 1) {
  console.log("and on");
}