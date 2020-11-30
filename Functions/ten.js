/*


JS100 - JavaScript Basics > Functions

10. Locale Part 2

Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

*/


function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// Another one I had to work backwards on. I didn't realize you could split what you split again. :)