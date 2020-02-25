const print = input => {
  console.log(input)
  //Add another console log
}

const printName = arr => {
  for (let a of arr) {
    console.log(a)
  }

  //add another for loop

  //Add an if with a return value, sometimes won't run the whole way through
}

const obj = {
  one: 'one',
  two: 'two',
  three: 'three'
}

const arr = ['one', 'two', 'three']

const findNumberArr = num => {
  for (let n of arr) {
    if (n === num) {
      return n
    }
  }
}

const findNumberObj = num => {
  return obj[num]
}