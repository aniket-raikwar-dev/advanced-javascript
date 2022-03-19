/* 
...args
these ... dots can be followed by any arguments and this is our Spread Operator and also Rest Operator.
*/
var returnedMax = Math.max(2, 8, 4, 2, 9, 6, 4, 1, 7);
console.log(returnedMax);


var myObj = {};
Object.assign(myObj, {a: 1, b: 2, c: 3, d: 4}, {e: 5, f: 6, g: 7});
console.log(myObj); //result is mixing the all objects.


function sumOne(a, b) {
   return a + b;
}
//console.log(sumOne(5, 5)); //10
//it will take two arguments individually, but you can give them teh value in a array [5, 5].
var myArray = [5, 5];
console.log(sumOne(myArray)); //5, 5 undefined
/*
here, the data is doesn't match, so it not understand what to do with that value.
*/

//look another example
console.log(sumOne(4, 4, 2)) //what does fucntion is not understand it will ignore the (2).
//console.log(sumOne(myArray)); similarly, it will try to do this, but after sometime that it will not able to understand and it will give another result.

/*
when you don't have to change function definition, and you have to pass a bunch or package (array, object) of value, then here is role of SPREAD OPERATOR (...)
*/

//Spread operator - it will take group and try to spread it into the multiple values
var myArray2 = [4, 4];
console.log(sumOne(...myArray2)); //it will take value individually



//when you don't know how many argument are comes here, so you simple put ...args operator in ().
//give any name , ...superman, ...args
function sumTwo(...args) { //REST OPERATOR

  console.log(args);

  let sum = 0;
  for (let arg of args) {
      sum += arg;
  }
  return sum;
}

//console.log(sumTwo(2, 3)); //5
console.log(sumTwo(5, 5, 10, 6)); //26

/**
 * Rest Operator is totally OPPOSITE to Spread Operator.
 * Spread Operator take bunch of array value and try to sperate them and pass into to a function parameter.
But,
 * REST Operator take a separate/individual value and try make them array or bunch of array and then pass them into to a function parameter.
 * 
 */

//You can do multiple opration with REST.
function sumLast(a, b, ...args) {

  console.log(args);

  let sum = 0;
  for(let arg of args) {
    sum += arg;
  }

  let multi = a * b;
  
  return [sum, multi];  //[20, 6]
}

console.log(sumLast(2, 3, 10, 4, 6));
//here, first two value take as a and b, and rest are array.



