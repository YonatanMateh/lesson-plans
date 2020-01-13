

const country1 = 'Canada'
const country2 = 'Israel'
const country3 = 'Thailand'
const country4 = 'Brazil'







//Array - Syntax




//Length




//Accessing




//Adding & Removing





//Objects - Syntax





//Accessing items





//Array of objects






//Reference type































const countries = ['Canada', 'Israel', 'Thailand', 'Brazil']
const goodIdeas = []

console.log(countries.length)
console.log(goodIdeas.length)

console.log(countries[0])
console.log(countries[2])
console.log(countries[countries.length - 1])

countries[2] = 'USA'
console.log(contries)

goodIdeas.push('go to the gym')
goodIdeas.push('take vacation')
console.log(goodIdeas)

const removedItems = countries.splice(1, 1)
console.log(countries)
console.log(removedItems)

const user = {
  name: 'Danny',
  type: 'instructor'
}

console.log(user)

console.log(user.name)

const cart = {
  total: 100,
  items: ['iPhone', 'Shirt']
}

console.log(cart.items[0])

cart.total += 10
console.log(cart.total)

const people = [
  { name: 'hunter', age: 25 },
  { name: 'jona', age: 30 }
]

console.log(people[1].age)


//Reference Type

let a = 10
let b = a

b += 5

console.log(a)
console.log(b)

const arr1 = [10, 20, 30]
const arr2 = arr1

arr2[0] = 5
console.log(arr2)
console.log(arr1)