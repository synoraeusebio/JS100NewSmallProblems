/*

JS100 - JavaScript Basics - Functions 2

7. Arrow Functions (Part 1)

Refactor the function below using arrow syntax. Line 9 should still log the same sentence.


const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

*/


const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);


console.log(sentence('like', 'birds'));


//Got it but I really need to review arrow notation

