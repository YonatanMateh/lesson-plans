
/* STEP 2 */
// const printType =function () {
//   console.log('My type is ' + this.type)
// }


const dog = {
  name: 'Fluffy',
  type: 'Beagle',
  printType: function () {
    console.log('My type is ' + this.type)
  }
}

dog.printType()


const dog1 = {
  type: 'Bulldog',
  printType: dog.printType
}

dog1.printType()