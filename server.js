






































const express = require("express")


const app = express()



const port = 4000
app.listen(port, function () {
    console.log(`Server up and listening on post ${port}`)
})












// api path: `https://www.googleapis.com/books/v1/volumes?q=`









// regular route: /book/tolstoy => returns Anna Karenina
// app.get("/book/tolstoy", function (req, res) {
//   res.send("Anna Karenina")
// })







// external API
// api path: "https://www.googleapis.com/books/v1/volumes?q="
// app.get("/book/api", function (req, res) {
//   const bookTitle = "Alice wonderland"
//   request.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle,
//       function (err, response) {
//           const book = JSON.parse(response.body).items[0]
//           res.send("Here is your book: " + book.volumeInfo.title);
//       })
// })