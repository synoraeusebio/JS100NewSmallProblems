/*

JS100 - JavaScript Basics-Arrays

6. Vocabulary 

We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.


let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

*/



let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
 

for (let i = 0; i < vocabulary.length; i += 1) {
  let newVocabulary = vocabulary[i];

  for(let newVocabularyIdx = 0; newVocabularyIdx < newVocabulary.length; newVocabularyIdx += 1) {
    console.log(newVocabulary[newVocabularyIdx]);
  }
}

// Worked backwards on this one. I needed a visual to understand the nested loop needed. I get it now!