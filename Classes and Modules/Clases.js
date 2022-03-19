//Class is blueprint, which show how object will look and behaved.

class User {
  //you can declared that varibale here, but not problem if you are not declaring here
  //var name;
  //var email;
  constructor(name, email) {
    //directly acces above variable here using this keyword
    this.name = name;
    this.email = email;   //this.email = class varibale || email = is contructor parameter
  }

  getInfo() {
    return {name: this.name, email: this.email};
  }

  courseList = [];

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }
}

module.exports = User;

/*

let aniket = new User("aniket", "aniketashok1999@gmail.com");
console.log(aniket);

aniket.enrollCourse("JavaScipt");
aniket.enrollCourse("Java");
aniket.enrollCourse("Reactive");

console.log(aniket.getInfo());
console.log(aniket.getCourseList());

*/
