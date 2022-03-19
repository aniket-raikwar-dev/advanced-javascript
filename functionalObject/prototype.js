/*
__proto__

when we have to add some more feature on our app, so we can go back to that source code and add it, but it's not really cool things. its a nonsense things.

So, here is a prototype.
using this prototype we can add more feature on our object without dusturbing it. 

*/

var User = function(name, course) {
        this.name = name;
        this.course = course;
        this.getCourse = function() { 
            console.log(`Course Count is : ${this.course}`)
    }
}

//creating another method (feature) without disturbing the main function.
User.prototype.getName = function() {
  console.log(`Name is : ${this.name}`)
}

var aniket = new User("aniket", 20);
aniket.getCourse();
aniket.getName();

var user = new User("tushar", 60);
user.getCourse();
user.getName();

/*
Here, "new" keyword played a important role: 

when a new instance is created, the job of "new" keyword is they have to find all that method 
which are created the outside of the main function and we are injected them into to the main
function without changing anything inside it.

*/