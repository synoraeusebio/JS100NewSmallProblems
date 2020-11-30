/*

JS100 - JavaScript Basics - Objects

5. Dot Notation vs Bracket Notation

Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

Snippet 1:

Copy Code
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?



Copy Code
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

*/

Yes, there is a difference. 

Snippet one (dot notation) logs

{ prefix: 'Pacific' }

Snippet 2 (bracket notation) logs 

{ Indian: 'Pacific' }