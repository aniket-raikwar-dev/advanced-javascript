/*
What is Scope Chain??????
-> Scoping means a particular area where you can ask for help to your above function or scope but cannot ask for help to
   your lower class scope or funcction.

          function () {

              - - - - -  S C O P E

          }

          {

                      ----------- scope

          }

          if(condition) {
          
            ---------it is also scope but not legally, you can say it scope but it's not actually.

          }
*/

var name = "aniket";
console.log("Line number 27: ", name);
//it will provide the everyone's to their name, bcoz it is in global scope.


function sayHello() {
  //it will get data from the above scope.
  console.log("Line number 32: ", name);
}
sayHello();


function sayName() {
  var name = "tushar";
  console.log("Line number 39: ", name) //if it don't have name, it will ask for name for his uper function.

  sayNameTwo();

  function sayNameTwo() {
    console.log("Line number 44: ", name) //it will ask for their upper function, please give me a name.
  }
}

sayName();