//Promises - resolved, reject, || async and await.

const funOne = () => {
   return "I am the first Function."
}

/*const funTwo = () => {

   setTimeout(() => {
     return "I am the second Function."
   }, 3000);

}*/

const funTwo = () => {

  return new Promise ((resolve, reject) => {
         
        setTimeout(() =>{
          resolve( "I am the second Function." );  //you can't return, bcoz already return declared
        }, 3000);
   });

}

const funThree = () => {
  return "I am the third Function."
}
/*
const callMe = () => {
  console.log(funOne());
  console.log(funTwo());
  console.log(funThree());
}
*/

const callMe = async() => {
   let valOne = funOne();
   console.log(valOne);

   let valTwo = await funTwo();
   console.log(valTwo);

   let valThree = funThree();
   console.log(valThree);
}

callMe();