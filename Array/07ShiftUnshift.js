// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.


// there are two method - shift() and unshift()

// shift - remove the first element
// unshift - add the first element
const num = [1, 2, 3, 4, 5];

num.shift();
console.log(num)

num.shift();
console.log(num);

num.unshift(10);
console.log(num);