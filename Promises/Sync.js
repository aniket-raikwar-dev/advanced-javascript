/*
Synchronous - it will run continuos, if there is method which takes more time to executed then the another method which are next to it, they have to wait for the prvious method to executed first and after that,
they have to executed.
it just block the other process.
*/

//sync

console.log("First Line");
console.log("Second Line");
function getThird() {
  console.log("Third Line");
}
getThird();
console.log("Fourth Line");
//this above function will run one after the one, in a sequence.

