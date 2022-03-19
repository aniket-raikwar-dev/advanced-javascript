// What is Prototype in JS? 
// Inheritance means inherit the property form its parent class to child class, 
// So, In JavaScript each and everything that you are created is consist of Object. 
// So, variables, arrays, object and function they all are object.

// Three type to create an object
// const obj = {};
// const obj = new obj();
// const obj = new Object({});

// Example of Prototype / Prototypal Inheritance
const obj1 = {
  name: "Aniket",
  getIntro: function() {
    console.log(this.name + " is their name.");
  }
};

const obj2 = {
  name: "Tushar", //Now obj2 inherit the properties from obj1 using proto.
  roll: 45,
  __proto__: obj1, //using this keyword we can access the property of obj1
}

obj2.getIntro();
// So, here it will find first name in their scope and if they found they simply print it but if they not found so, it will go to their parent prototype with is attach with them and they try to find them, if they get they print and if they not get, so in the last their is prototype we called it object.

const obj3 = {
  __proto__: obj2,
  // this object getting properties of obj2 and it also connect with obj1 so it can also access the properties of obj1 and obj2.
}

console.log(obj3.name);
console.log(obj3.roll);
obj3.getIntro();