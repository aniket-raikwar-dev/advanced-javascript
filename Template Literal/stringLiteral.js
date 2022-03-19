/*
what are the literals in JavaScript?
-> for defining the string we used two types of quote 
double = " ", and single = ' ',
Now the problem is that, when we have to used the words like = aniket's, wow"s, book's,
so there is problem is created.
*/

//JS invent interpolation (double back-tick) = ` `,

var game = `jungle safari's`;
var result = `the game is ${game}`;
console.log(result);
//this is string literal ``.



var name = "aniket" //double qote
var role = 'developer' //single qote

/*
But, In C or C++ the " " is used for storing string and ' ' is used for storing the single character
*/

//when we have to write this type of word then used (\) and add qote.
var book = "interpolation'\s" //
console.log(book) 

var car = 'mercede\"s'
console.log(car);

//problem
//var animal = "cat"s" 
//var color = 'green"s'
//They cannot understand which is string