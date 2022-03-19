/*
Self-Executing Anonymous Funtion,

Immediately Invoked Function Expression
*/

/*
- - - normal syntax - - - 

var sayHello = function() {
  console.log("Hello");
  console.log("Again Hello")
}

sayHello();
*/


//Anonymous means the function doesn't have any name , they will be treated as a variable.


(function() {
  console.log("Hello");
  console.log("Again Hello")
})();

// (f)();

