/**
 * Getter is used for getting that set values from setter. 
 * Setter is used for set some value which is provided by user.
 */

class User {
  
    constructor (name, email) {
      this.name = name;
      this.email = email;
    }

    getInfo() {
      return {name: this.name, email: this.email};
    }

    #courseList = [];

    setCourse(name) {                                    //setter
      this.#courseList.push(name);
    }

    getCourseList() {                                   //getter
      return this.#courseList;
    }

}

const aniket = new User("aniket", "aniket186@gmail.com");
console.log(aniket.getInfo());
aniket.setCourse("JavaScript BootCamp Course");
console.log(aniket.getCourseList());
console.log(aniket.courseList);

//for do private something used # .
//getter is something which can access that is private in a class.

/*
you cannot access private member directly in a class, so getter method help to access them, 
for declaring something private used (#) and now you will try to direct acces that courseList 
you will get undefined output.
*/