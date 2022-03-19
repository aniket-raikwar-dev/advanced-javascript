//async

/**
 * Asynchronous - it work sequential, but if some process take more time, then they will executed the remaining process and after that they will executed the pending one.
 * So, the other process don't have to wait for the previos one to exectued.
 * non - blocking the things.
 */
console.log("First Execute");

console.log("Second Execute");

function third() {
   
  setTimeout(() => {
    console.log("Third Execute in SetTimeout");
  }, 3000);

  console.log("Fourth Execute in third()");

}

third();

console.log("Fifth Execute")

//it will work asynchronously, 