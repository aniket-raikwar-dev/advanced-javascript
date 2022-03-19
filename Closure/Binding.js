/*
when you have to access any value from Object then used "this" keyword.
But, In a function or lexical scopping you don't need "this" keyword for accessing any value 
or properties. it will automatically accessed them.

R E M E M B E R
Object = used this keyword for access data.
Function = doesn't need this keyword for access.
*/

//closure is also called as currying.

const aniket = {
   firstName: "Aniket",
   lastName: "Raikwar",
   age: 22,
   role: "Front-end Developer",
   getInfo: function() {
     console.log(`
       First Name is ${this.firstName} 
       and 
       Last Name is ${this.lastName} 
       and his age is ${this.age} 
       and 
       his is playing the role of ${this.role}.
     `)
   }
}

//another method.
const tushar = {
   firstName: "Tushar",
   lastName: "Hatwar",
   age : 40,
   role : "Web Developer",
}

aniket.getInfo();

//bind method just give a refference.
aniket.getInfo.bind(tushar);

//There are Two Ways to Run this method. 
//1 - aniket.getInfo.bind(tushar)();
aniket.getInfo.bind(tushar)();

//2 - store is referenced in another variable and then run | var name = aniket.getInfo.bind(tushar); |
const getTusharInfo = aniket.getInfo.bind(tushar);
getTusharInfo();


//Call() method. it gives a direct method, while bind give a refference.
aniket.getInfo.call(tushar);
