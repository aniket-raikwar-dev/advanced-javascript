/* 
Better code with object chain.
*/

var Book = function(name, price) {
    
    this.name = name;
    this.price = price;
    this.getPrice = function() {
      console.log(`Price of ${this.name} is : ${this.price}`);
    }
}

Book.prototype.getName = function() {
  console.log(`Book Name is : ${this.name}`);
}



var book1 = new Book("Best Friends", 455.00);
book1.getPrice();
if(book1.hasOwnProperty("name")) {

   book1.getName();

}
//console.log(book1);



var book2 = new Book("Zero to Hero", 240.78);
book2.getPrice();
book2.getName();
//console.log(book2)
