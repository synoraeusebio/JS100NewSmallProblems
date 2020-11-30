/*

JS100 - JavaScript Basics > Reading Documention 

10. Equality

Question: In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. 
Take a look at the MDN documentation on equality comparisons to read about how == and === differ.


'8' == 8;
'8' === 8;

Answer: 

== (equality) checks to see if two operands are equal by convering, then comparing them. 
When one operand is a string, it gets converted to a numeric value. 
So the string '8' gets converted to the number 8, then comparion happens and returns a boolean true.


=== (strict equality) checkes if two operands are equal (as-is) and returns a boolean results. No conversion takes place. 
Since '8' is a string and 8 is a number, they are not the same type and boolean false is returned. 


*/



console.log('8' == 8); // true
console.log('8' === 8); // false