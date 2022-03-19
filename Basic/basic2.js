
function sayHello(name){
  return `Hello ${name}, How are you!`
}

console.log(sayHello("Aniket"));

let say = sayHello("Raikwar");
console.log(say);

let print = sayHello;
console.log(print("John"));