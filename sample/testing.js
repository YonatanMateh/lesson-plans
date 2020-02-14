// // Step one


// const createHouse = function (bath, bedrooms) {
//   const house = {
//     bath: bath !== undefined ? bath : true,
//     bedrooms: bedrooms ? bedrooms : 3
//   }

//   return house
// }

// // console.log(createHouse(false, 5))
// // console.log(createHouse())

// const testHouse = function () {
//   let house = createHouse(false, 5)
//   if(house.bath !== false) { return 'failed' }
//   if(house.bedrooms !== 5) { return 'failed' }

//   house = createHouse()
//   if(house.bath !== true) { return 'failed' }
//   if (house.bedrooms !== 3) { return 'failed' }

//   return 'passed'
// }

// console.log(testHouse())


// Step two
// const createHouse = function (bath, bedrooms) {
//   const house = {
//     bath: bath !== undefined ? bath : true,
//     bedrooms: bedrooms ? bedrooms : 3
//   }

//   return house
// }


// const testHouse = function () {
//   const requiredKeys = ['bath', 'bedrooms']

//   let house = createHouse(false, 5)
//   if(house.bath !== false) { return 'failed' }
//   if (house.bedrooms !== 5) { return 'failed' }

//   let keys = Object.keys(house)
//   for (let key of keys) {
//     if(!requiredKeys.includes(key)) { return 'failed' }
//   }

//   house = createHouse()
//   if(house.bath !== true) { return 'failed' }
//   if (house.bedrooms !== 3) { return 'failed' }

//   keys = Object.keys(house)
//   for (let key of keys) {
//     if(!requiredKeys.includes(key)) { return 'failed' }
//   }

//   return 'passed'
// }

// console.log(testHouse())


// Step 3
const createHouse = function (bath, bedrooms) {
  const house = {
    bath: bath !== undefined ? bath : true,
    bedrooms: bedrooms ? bedrooms : 3
  }

  return house
}

const addOne = x => x + 1

const isBiggerThanFive = x => x > 5


module.exports = { createHouse, addOne, isBiggerThanFive }