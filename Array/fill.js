//fill method is used to filled the array element

var testArray = [2, 4, 6, 3, 9, 7, 1, 6, 5, 8];

console.log(testArray.fill(0));
console.log(testArray.fill("h"));
console.log(testArray.fill("m", 2));
console.log(testArray.fill("a", 2, 5))


//it take 3 value, to fill, - value, start and end 
//start is inclusive and end is exclusive.