var name = "aniket";

function getName() {
  console.log(name);

  function setName() {
    var name = "tushar";
    console.log(name);
  }

  setName();
}

getName();


// Lexical Environment is the local memory along with the lexcial environment of it parents.
// Lexical => Hierarchy, Sequence

// In the above program, setName() is inside the getName() function So, we can called it setName is lexically inside a getName() that is parent for that, so it can be accessed the value of getName().

// Whenever the new execution context is created, So in the memory component is algo get a reference of its lexical environment of its parents. 

/* function getName() {

     var b = 2;

     return function () {      this is the lexical environment where function getName is parent           lexical                   environment for its child
     console.log(b);
     }
  }
 */