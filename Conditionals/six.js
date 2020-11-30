/*


JS100 - JavaScript Basics > Conditionals

Exercise 6. Check the Weather, Part 2

Problem: 

Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.


let weather = "clear"; // Can also use "sunny"  or "rainy"

if(weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy"){
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

*/


let weather = "sunny"; // Can also use "sunny"  or "rainy"

switch (weather) {
 case "sunny":
  console.log("It's a beautiful day!");
  break;
  case "rainy":
   console.log("Grab your umbrella.");
  break;
  case "gloomy":
   console.log("It's cloudy today.");
   break;
 default:
   console.log("Let's stay inside.");
}

