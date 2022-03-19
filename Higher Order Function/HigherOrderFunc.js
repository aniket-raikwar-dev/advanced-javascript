/**
  A function which takes another functions as a argument and also return a functions is called as a
   Higher Order Function.
 */
//One Example
function x () {     //x is a callback function
  console.log("Aniket");
}

function y (x) {   //y is a higher order function
  x();
}   


//Normal way to find area of circle;
const radius = [2, 4, 6, 8];
const calculateArea = function (radius) {
  const output = [];
  for(let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}
console.log(calculateArea(radius));


//Functional Way (DRY)
const rad = [4, 5, 2, 1 ];

const area = function(radius) {
  return Math.PI * rad * rad;
}

const calculate = function(radius, logic) {
  const outputt = [];
  for(let i = 0; i < radius.length; i++) {
    outputt.push(logic(radius[i]));
  }
  return outputt;
}

console.log(calculate(rad, area))