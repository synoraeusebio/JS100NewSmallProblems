/*

JS100 - JavaScript Basics > Reading Documention 2

6. Which year is this?

The MDN page for Date lists two methods to get the year of a date.


let today = new Date();

today.getYear();
today.getFullYear();

What is the difference between the two methods and which one should you use?


Answer: 

.getYear() has been deprecated but it returns the specified date according to local time. It doesn't return full years, which is why it has been replaced with .getFullYear(). Example this method would return 2019 as 119.



.getFullYear() method returns the year of the specified date according to local time. You should use this one!

*/