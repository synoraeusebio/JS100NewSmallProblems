/*

JS100 - JavaScript Basics - Functions 2

8. Arrow Functions (Part 2)

The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

*/

let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

// this one I really need to review.