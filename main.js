
const printWord = function () {
  console.log('word')
}

printWord()

// Basic arrow function

const printWordTwo = () => {
  console.log('word2')
}

printWordTwo()


// Arrow functions with params

const multiply = (x, y) => {
  return x * y
}

console.log(multiply(10, 4))

// One param

const printAge = age => {
  console.log(`I am ${age} years old.`)
}

printAge(30)


// One line arrow function

const divide = (x, y) => x / y

console.log(divide(10, 2))


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

obj.displayName()