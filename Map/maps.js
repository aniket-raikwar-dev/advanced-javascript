//for-of loop is always give u the key first
//forEach loop is always give u the value first .

var myMap = new Map();

myMap.set(1, "One");  // keys and values
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");

console.log(myMap);  //this are not regular object


console.log(`----------------------------------`)
//retrieve single key using for of loop
for(let key of myMap.keys()) {
    console.log(`Keys are : ${key}`);
}

console.log(`----------------------------------`)
//retrieve single value using for of loop
for(let value of myMap.values()) {
    console.log(`Values are : ${value}`);
}


console.log(`----------------------------------`)
//retrieve both key and value using for-of loop
for(let [k, v] of myMap) {
   console.log(`Keys are : ${k}, and Values are : ${v}`);
}


console.log(`----------------------------------`)
//you can access it using forEach loop
myMap.forEach( (key) => console.log(`${key}`));
/*
most confusing part is that, you want key but you get value of that key.
bcoz, forEach loop is directly access the value of key.
The forEach loop is designed as this, you have to modified with value so i will provided you value ,
not the indexes and here the key is represented as indexes.
*/

console.log(`----------------------------------`)
//Access Both by using forEach loop
myMap.forEach( (k, v) => {console.log(`${k} and ${v}`)});


myMap.delete(2);
console.log(myMap) 


var romanToInt = function(s) {
    
    var myMap = new Map();
    myMap.set("I", 1);
    myMap.set("V", 5);
    myMap.set("X", 10);
    myMap.set("L", 50);
    myMap.set("C", 100);
    myMap.set("D", 500);
    myMap.set("M", 10000);
    
    var result = 0;

    for(let i = 1; i < s.length; i++) {
        if(myMap(s[i]) == 0 && myMap(s[i]) < myMap(s[i + 1])){
            result -= myMap(s[i]);
        }
        else{
            result += myMap(s[i]);
        }
    }
};

romanToInt("III");