const Human = function (fName, lName) {
  const firstName = fName
  const lastName = lName

  const sayName = function () {
    console.log(`My name is ${firstName} ${lastName}`)
  }

  return { sayName }
}

const h1 = Human("Gili", "Levy")
console.log(h1)
h1.sayName()
const h2 = Humna("`Yonata")

const human = {
  firstName: "Dannhy",
  lastName: "Brud",
  sayName() {
    console.log(`my name is`)
  }
}

human.sayName()


class Person {

  constructor(fName, lName) {
    this.firstName = fName
    this.lastName = lName
    this.isMarried = false
  }

  sayName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
  }
}

const p1 = new Person('Gili', 'Levy')
p1.isMarried = true
console.log(p1)

const p2 = new Person('Danny', 'Levy', false)
console.log(p2)

p2.sayName()