
//Closure in JS

function hello(x){

  return function(y) {

    return x + " " + y;

  }
}
var hell = hello("Hello");
console.log(hell("World"));

/**
 A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

//---------------------------------------------------------
//link = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


function doAddition(x) {
    
    return function(y) {

      return x + y;

    }
}

var add5 = doAddition(5);  //add5 is closure.
console.log(add5(5));

console.log(doAddition(5)(10)); //another way.

//---------------------------------------------------------

function outerFunction(outerVar) {

  return function innerFunction(innerVar) {

    console.log("outer variable: ", outerVar);
    console.log("inner variable: ", innerVar);

  }
}

const newFunc = outerFunction("outer");
newFunc("inner");

outerFunction("outer")("inner");


//---------------------------------------------------------



function one(value1){
  return function(value2){
    console.log(value1);
    console.log(value2);
  }
}

one(1)(2);

// O R

function one(value1){
  function two(value2){
    console.log(value1);
    console.log(value2);
  }

  return two;
}

one(1)(2);

