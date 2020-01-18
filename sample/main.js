//FUNCTION REMINDER

// const createFood = function (name, price) {
//   const food = {
//     name: name,
//     price: price
//   }

//   return food
// }

// const newFood = createFood('Apple', 5)
// console.log(newFood)
// console.log(food)









// //FUNCTIONS CAN RETURN OTHER FUNCTIONS
// const cartOps = function () {

//   const addToCart = function (item) {
//     console.log(item.name + " has been added to cart")
//   }

//   return addToCart
// }

// const cart = cartOps()
// console.log(cart)
// cart(newFood)












// //CLOSURES
// const logWord = function (word) {
//   let newWord = word

//   const printWord = function () {
//     console.log(newWord)
//   }

//   return printWord
// }

// const newLog = logWord('Beach')
// newLog()






// //CLOSURES PERSIST OUTER VARIABLES
// const counter = function () {
//   let num = 0

//   const add = function () {
//     num++
//     console.log(num)
//   }

//   return add
// }

// const count = counter()
// count()
// count()
// count()
// count()
// count()
// count()










// //MODULE - CALCULATOR
// const calculator = function () {
//   const add = function (a, b) {
//     return a + b
//   }

//   const subtract = function (a, b) {
//     return a - b
//   }

//   const multiply = (a, b) => a * b

//   return {
//     add,
//     subtract,
//     multiply
//   }
// }

// const c = calculator()
// console.log(c.add(10, 79))
// console.log(c.subtract(10, 79))
// console.log(c.multiply(10, 79))









// //REVIEW MODULE
// const ReviewsModule = function () {
//   const reviews = []

//   const addReview = function (author, rating) {
//     const review = { author, rating }
//     reviews.push(review)
//   }

//   const getReviews = function () {
//     return reviews
//   }

//   return { addReview, getReviews }
// }

// const rm = ReviewsModule()
// rm.addReview('danny', 5)
// rm.addReview('Sam', 2)
// rm.addReview('James', 4)

// console.log(rm.getReviews())
