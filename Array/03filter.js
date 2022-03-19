//filter the most important method
// what he do, - he just take an condition which he apply for base array and according to that condition
// it will return the new array.

// The filter() method creates a new array with all elements that pass the test implemented by the provided function

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter( word => word.length > 6);
console.log(result);


const num = [2, 5, 7, 8, 10, 4, 5];
const ans = num.filter( item => item > 5);
console.log(ans);



const name = ["aniket", "raikwar", "tushr", "rohit", "helo"];
const res = name.filter(item => item.includes('a'));
console.log(res);