var User = {
  name: "",
  getUsername: function() {
    console.log("User Name: ", this.name);
  },
};

var aniket = Object.create(User);
console.log(aniket)

aniket.name = "Aniket Raikwar";
console.log(aniket)