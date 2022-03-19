/*
There are two types of Context 
1. GLobal Context and 
2. Execution Context
*/

// Function Declarations are scan and made them available
// Variable Declarations are scan and made them undefined

/*
Global Context is very smart they check hole source code and if you call the function first and after that
you will defined that, so it will automatically provide them to that call back 
*/

/*
Execution Context is only come when there is need of Execution of any program.
 */

// Function Declarations are scan and made them available
sayMe();

function sayMe() {
  console.log("Say ME !!!");
}


// Variable Declarations are scan and made them undefined
console.log(name);
var name = "aniket";


function sayName() {
  var name = "tushar";
  console.log(name);
}

sayName();  //execution context come here and execute this things after that they go away...
//they don't know who is after that, they are just doing there work.

console.log(name);


//function treated as variable

newFunc();

let newFunc = function(){
  console.log("here!, is new Function()");
}
//it show error, bcoz global context is scan them , he think you call first and after you defined but it cannot be
//assume there is variable. is always show undefines or Error.


