//closure
//function()()()
//or also called as currying

function doOne(num1){

   return function(num2){

     return function(num3){

       return num1 + num2 + num3;

     }
   }
}

console.log(doOne(5)(5)(5));  //currying