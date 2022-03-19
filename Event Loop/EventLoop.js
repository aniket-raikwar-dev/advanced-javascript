//will javaScript wait ?

const one = () => {
    console.log("I am One.")
}

/**
 * the setTimout function is waiting for 3 second, while in that time the other things are runnned,
 * if there is some lazy function, so he will wait, but the fast one are always executed.
 * But, if this setTimout function is waited the things that are dependent on it, it will be not exceuted, and if they executed then they cause problem.
 */
const two = ()  => {
   
  setTimeout(() => {
    console.log("Ok, Waited for 3000s");
  }, 3000);

  console.log("I am Two.")
}


const three = () => {
  console.log("I am Three.")
}

one();
two();
three();
