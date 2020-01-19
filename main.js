// Callbacks & theory




















// Synchronous code

const printAfterWait = function(){
  console.log("finished waiting")
}

const wait = function(timeMs){
  const start = Date.now()
  let currentTime = Date.now()

  while (currentTime - start < timeMs){
    currentTime = Date.now()
    console.log('waiting')
  }
}



// console.log("starting")
// wait(2000)
// printAfterWait()
















// Asynchronous code

const waitWithTimeout = function () {
  setTimeout(function () {
    console.log('waiting')
  }, 2000)
}




// console.log("starting")
// waitWithTimeout()
// printAfterWait()


















// ARROW FUNCTIONS (function recap)

















// Basic arrow function

















// Arrow functions with params

















// One param

















// One line arrow function





















// This