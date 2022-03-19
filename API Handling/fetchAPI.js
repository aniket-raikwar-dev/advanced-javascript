fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
   //console.log("API is: ", response);
   return response.json();   //whatever you return he should go to the next then 
})
.then( (data) => {
  //console.log("DATA is: ", data);
  //if we have to access some value from api
  var joke = data.value;
  console.log("JOKE is : ", joke);
})
.catch();  //used when there is some error
