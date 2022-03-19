//this is the idea , how asynchronous code work.


/*
console.log("Start");

function loginUser(email, password) {

  setTimeout(() => {
    console.log("Now we have the data")
    return { userEmail : email, userPassword : password };
  }, 5000);

}
const user = loginUser("aniket1782@gmail.com", 12345678);
console.log(user); //we can't access the user data in setTimout'

console.log("Finish");
*/

console.log("Start");

function loginUser(email, password, callback) {

  setTimeout(() => {
    console.log("Now we have the data")
    callback({ userEmail : email, userPassword : password });
  }, 5000);

}

//callback function
function getUserVideo(email, callback) {
  setTimeout(() => {
    callback( ["videos 1", "videos 2", "videos 3", "videos 4"] );
  }, 3000);
}

//another callback function
function videoDetail(video, callback) {
  setTimeout(() => {
    callback("details of the videos such as - title, description.")
  }, 2000);
}

const user = loginUser("aniket1782@gmail.com", 12345678, (user) => {
        console.log(user); //we can access the user data using callback function
        getUserVideo(user.userEmail, (videos) => {
              console.log(videos);
              videoDetail(videos[0], (details) => {
                          console.log(details);
       });
     });
});
 
//don't need to call that function
//it work asynchronously.

console.log("Finish");