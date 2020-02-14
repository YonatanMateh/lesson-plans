// Step 3

// const createHouse = require('./testing')

// test('Should create a new house', () => {
//   let house = createHouse(false, 5)
//   expect(house).toEqual({ bath: false, bedrooms: 5 })

//   house = createHouse()
//   expect(house).toEqual({ bath: true, bedrooms: 3 })
// })



// Step 4
const { addOne, isBiggerThanFive } = require('./testing')

test('Should return the result of x + 1', () => {
  const positiveNumber = addOne(5)
  const negativeNumber = addOne(-10)
  const zero = addOne(0)

  expect(positiveNumber).toBe(6)
  expect(negativeNumber).toBe(-9)
  expect(zero).toBe(1)
})

test('Should return true if number is larger than five', () => {
  let isLarger = isBiggerThanFive(10)
  expect(isLarger).toBeTruthy()
  // Can always return true, so need to test the opposite as well

  isLarger = isBiggerThanFive(2)
  expect(isLarger).toBeFalsy()
})


// Step 5 - Testing with classes

const PrimeNumbers = require('../PrimeNumbers')

test('Should add prime numbers only to the array', () => {
  const p = new PrimeNumbers()

  expect(p.primes).toHaveLength(0)

  p.addPrime(7)
  expect(p.primes).toHaveLength(1)
  p.addPrime(6)
  expect(p.primes).toHaveLength(1)
})