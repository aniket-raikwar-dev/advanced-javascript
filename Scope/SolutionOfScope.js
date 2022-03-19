/*
SCOPE {}
But in JavaScript scope is not considered as a {} this, but they considered as a function() {}
There are Three Keyword - let , var, const
Now, two type of scope - global and local scope.

We can access the value from global scope using "var" keyword, but,
the local scope cannot be give its value to their outer scope,
It's Javascript Behavior. REAL
*/

//This is Hoisting, the result is undefined.
//Global Context scan the variable declaration and made them undefined.
console.log(name);
var name = "aniket";


//BUt, when we used "let" keyword
console.log(lastName)
let lastName = "raikwar";
//it will throw and error, because, let is used only for local context and it will not be access by global.

//see default for loop example
/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/

//default it comes with "let" keyword, once it's execution is completed then they will poof/go.
//they work inside the for loop scope only.

if(true) {
  var animal = "cat"; //inside a local scope
}
console.log(animal); //but it can access that value, which is not good.
//that's why there is let keyword will introduce in modern javascript



//Now used let keyword 
if(true) {
  let animal = "cat"; //inside a local scope
}
console.log(animal); //they cannot access that value.

//this is the original behavior of JavaScript.

