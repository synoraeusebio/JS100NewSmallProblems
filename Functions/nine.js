/*


JS100 - JavaScript Basics > Functions

9. Locale Part 1

Write a function that extracts the language code from a locale. 
A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

*/

function extractLanguage(locale) {
  return locale.split('_')[0]; // use split method to split the string starting at the "-" character, then return the first element in the array
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'


// Worked backwards to understand this. 