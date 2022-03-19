/*
"new" keyword is responsible for creating a functional object.
 this just create a copy or instance of an given prototype (blueprint).

 window. object = global object 
 this. = window.   //it simply replace window keyword with this and take place as it.

 we can acces "this" keyword from anywhere in a global or local object.
link = https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript

*/

//functional declaration of an object.
//functional way of creating an object
var User = function(name, age, height) {

    this.name = name;
    this.age = age;
    this.height = height;
    this.getAge = function() {
      console.log("Age is : ", this.age);
    };
};

var aniket = new User("aniket", 21, 5.7);
console.log(aniket);

var user = new User("aniket", 21, 5.7);
console.log(user);

//if you not used "new" keyword then they will show you undefined output.
/*
bcoz the role of "new" keyword is that, {
   
    it is responsible for creating that above function.
    it is responsible for invoking the constructor and creatinge a new instance at every time.
    it will take care of "this" keyword.
    this keyword is always toward point the window object / global object, but using
    "new" keyword it will move the "this" keyword from a global object to inside of this user object. 

}

if you are not using "new" keyword then it not a regular function call, nd that's why it will show undefined.
*/

