//import User from './Clases' not used here, but in library | ES6 Version

const User = require('./Clases.js');

const aniket = new User("aniket", "aniket1999@gmail.com"); //constructor call 

console.log(aniket);  //log whole class
console.log(aniket.getInfo()); //call a specific method
console.log(aniket.getInfo().name);  //call an variable 


aniket.enrollCourse("React Bootcamp");
aniket.enrollCourse("JavScript ES6");

console.log(aniket.getCourseList()); //you get an array of this 

//access one element using loop
let courses = aniket.getCourseList();
courses.forEach((item) => console.log(item));
courses.forEach((item) => console.log(item));