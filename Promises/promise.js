//promises make the code more easy to understand than the callback function
//it take two parameter = resolve and reject,



//creating a promises - used "new" keyowrd and we called as a object and special constructor
const promises = new Promise ((resolve, reject) => {
   setTimeout(() => {
     console.log("we got data from database");
     resolve( {user: "aniket"} );
   }, 3000);
})
//now run this promises using "then" keyowrd
promises.then( (user) => { //this then keyword, takes a arrow function for getting the data.
  console.log(user);
})



//using Reject 
const promiseReject = new Promise ((resolve, reject) => {
  setTimeout(() => {
    console.log("we got data from database");
    reject(new Error('Sorry, the user is not logged in.'))  //reject and then type new Error
  }, 3000);
})

promiseReject.then( (user) => { 
 console.log(user);
}).catch( (err) => {console.log(err.message)})
