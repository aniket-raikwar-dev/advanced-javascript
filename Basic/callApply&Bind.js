// This Three method is work very similar but they have their some minor changes.

// This method will work in a object and function.
// Whenever you have to call a same function for a different object property so we can used this 3 method


// Example 1
const object1 = { 
  name: "aniket", 
  age: 21, 
  work: "software Developer",
  printDetail: function() { 
    console.log(this.name);
  }
}

object1.printDetail();

// now I have create one another object and try to implement the same method using call() method
const object2 = {
  name: "rohit",
  age: 78,
}

object1.printDetail.call(object2);
// now this method will for that object2 without creating a new seaprate function


// Example 2 - creating two object and separate function
const aniket = {
  name: 'aniket',
}

const rohit = {
  name: "rohit",
}

const fun = function(method, age) {
  console.log(this.name + " " + method + " " + age);
}

// call
fun.call(aniket, "call", 46);
fun.call(rohit);


// Apply
fun.apply(aniket, ["apply", 34]);
// So, there is minor difference in call() and bind() , we can pass single variable/parameter through a call() method but if we used apply() so we can pass a list of array parameters.


// Bind
const store = fun.bind(aniket, "bind", 45);
store();
// In bind() method it also work like a call()
// but not directly you can call them, first you have to store them in a variable and then you have to call them separately, (direact call mt kro, use store kr lo phir call kro) - just make a copy first.
