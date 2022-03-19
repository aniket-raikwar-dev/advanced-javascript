// Bit Confusing method of array is that splice and slice

//slice - it just slice (cut) the element from start to end.
// it required two points - 1st for inlcude and 2nd for exluding 

const num = [1, 2, 33, 4, 5, 6, 99];
console.log(num.slice(2, 3)); //it will show 33 (start-2 index, and end - 2 index) because last is exluding


console.log(num.slice(1, 5));


// Splice => in the splice method it change the content of an array by removing or updating them.
// it just modified the array

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

