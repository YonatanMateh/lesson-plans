// Callbacks & theory

const printEven = function(num){
  console.log(num + " is even")
}

const printOdd = function(num){
  console.log(num + " is odd")
}

const printNumber = function (number, printFunction) {
  printFunction(number)
}


const number = 6

if (number % 2 === 0){
  printNumber(number, printEven)
} else {
  printNumber(number, printOdd)
}


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

const waitWithTimeout = function (func) {
  setTimeout(function () {
    console.log('waiting')
    func()
  }, 2000)
}

console.log("starting")
// waitWithTimeout()
waitWithTimeout(printAfterWait)
// printAfterWait()








// ARROW FUNCTIONS

const printWord = function () {
  console.log('word')
}

// printWord()

// Basic arrow function

const printWordTwo = () => {
  console.log('word2')
}

// printWordTwo()


// Arrow functions with params

const multiply = (x, y) => {
  return x * y
}

// console.log(multiply(10, 4))

// One param

const printAge = age => {
  console.log(`I am ${age} years old.`)
}

// printAge(30)


// One line arrow function

const divide = (x, y) => x / y

// console.log(divide(10, 2))


// This

const obj = {
  name: "sample",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...")

    //   setTimeout(function () { //this is the change
    //     console.log(this)
    // }, 3000)

    setTimeout(() => { //this is the change
      console.log(this)
    }, 3000)

  }
}

// obj.displayName()