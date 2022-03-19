/*
                     D E S T R U C T U R E
left hand side variable is match with the RIght hand side variable.    
it can be happens on object and arrays and in so many things.   
*/

//Whatever the data type on the right side, similar data types should be on the left side
//and probably you can do the de-structuring.

const user = ["aniket", 5, "admin"];
//simple way of accessing the element
console.log(user[1]);

//or another way of accessing the element
/*
var name = user[0];
var courseCount = user[1];
var role = user[2];

console.log(role);
*/

//But, you can also access instead of doing this above method,
var [name, courseCount, role] = user;
console.log(name); //same result



//Destructuring with objects
const phone = {
  brand: "Motorola",
  price: 12999,
  country: "India",
  cod: true,
};

console.log(phone.brand); //simple way - . dot notation

//But You can also used,
const {brand, price, country, cod} = phone;
console.log(price);

//you have to match the above name with the original name.



