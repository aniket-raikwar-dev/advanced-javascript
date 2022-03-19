//AsyncTwo.js file using callback functions. So, we are changing them using promises 
//and make them easy to read.

console.log("Start");


function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now, we have the data");
      resolve({userEmail: email, password: password});
    }, 3000);
  }) 
};


function getUserVideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( ["videos 1", "videos 2", "videos 3", "videos 4"] );
    }, 2000)
  });
};


function videoDetail(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("details of the videos such as - title, description.")
    }, 2000);
  });

};

//rewrite this below sentence using "then"
/*
const user = loginUser("aniket1782@gmail.com", 12345678, (user) => {
        console.log(user); //we can access the user data using callback function
        getUserVideo(user.userEmail, (videos) => {
              console.log(videos);
              videoDetail(videos[0], (details) => {
                          console.log(details);
       });
     });
});
*/
loginUser("aniket753@gmoool.com", 751827221)
.then( user => getUserVideo(user.email)) //getUservideo return another promises so used "then"
.then( videos => videoDetail(videos[0])) 
.then( details => console.log(details));


console.log("Finish");