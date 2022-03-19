/*
child class can access the data member and member funtion from a parent class
*/

class User {

   constructor(name, email) {
      this.name = name;
      this.email = email;
   }

   getInfo() {
     return {name: this.name, email: this.email};
   }

   #courseList = [];

   setCourseList(name) {
     this.#courseList.push(name);
   }

   getCourseList() {
     return this.#courseList;
   }

   //if you have to make private any method then used "static" keyword
   static login() {
     return "You are logged in."
   }

   //now child class can't access that

}

class NewUser extends User {
     
     constructor(name, email) {
        super(name, email);
     }

     getNewInfo() {
        return "I am a New User."
     }

     login() {
       return "I am login in New User Class"
     }
     //if there is same method in parent and child class then the object that are created using which class can access can access that method, if object is created using NewUser class then they will access the their login, but if object is made using Parent class then they will access their parent method, 
     //Concept of Overidding.

}

const tom = new NewUser();  //creating an object 
console.log(tom.getNewInfo());
console.log(tom.login());
console.log(tom.getInfo());


const jerry = new NewUser("jerry", "tom@jerry.com");  //creating an object
console.log(jerry.getNewInfo());
console.log(jerry.login());
console.log(jerry.getInfo());

//using super keyword you can access so many things just like constructor name and email