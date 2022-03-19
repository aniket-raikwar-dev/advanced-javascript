//lexical scopping


// global context

function sayhello() {
  var firstName = "aniket";

  function sayName() {
    console.log(firstName);
  }

  sayName(); //execution context 2
}

sayhello(); //execution context 1

/*
Lexical Scopping means , ek ander ka function uske bahr ke function ki value ko acces kr skta hai,
but ek bahar ka function uske ander ke chote function ki value ko access nhi kr skta.
*/
