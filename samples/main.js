// Document (Object Model)
console.log(document)


// Target elements
const text = document.getElementById('text')
console.log(text)

const boxes = document.getElementsByClassName('box')
console.log(boxes)


// Manipulating elements
console.log(text.innerHTML)

console.log(document.getElementById('container').innerHTML)

text.innerHTML = 'new text'

for (let box of boxes) {
  // console.log(box.style.backgroundColor) - returns empty string because there is no inline style

  // box.style.backgroundColor = 'blue'
  // console.log(box.style.backgroundColor)

  box.className += ' cube' //box.classList.add('cube')
  box.id = 'new' //don't do this in loop because we can't have id's on separate divs
}

const addBox = function () {
  const paragraph = document.createElement('p')
  paragraph.innerHTML = 'this is an nice paragraph on how to access dom'
  // paragraph.style.color = 'purple'
  paragraph.setAttribute('id', 'para')
  // document.body.appendChild(paragraph)
  // document.getElementById('container').appendChild(paragraph)

  const container = document.getElementById('container')
  container.innerHTML = ''
  container.appendChild(paragraph)

  /* IF ASKED - can create elements and append into them and then append to the dom*/

  // const div = document.createElement('div')
  // div.appendChild(paragraph)
  // document.body.appendChild(div)
}

const button = document.getElementById('btn')
// button.onclick = function () {
//   const paragraph = document.createElement('p')
//   paragraph.innerHTML = 'this is an nice paragraph on how to access dom'
//   // paragraph.style.color = 'purple'
//   paragraph.setAttribute('id', 'para')
//   // document.body.appendChild(paragraph)
//   // document.getElementById('container').appendChild(paragraph)

//   const container = document.getElementById('container')
//   container.innerHTML = ''
//   container.appendChild(paragraph)

//   /* IF ASKED - can create elements and append into them and then append to the dom*/

//   // const div = document.createElement('div')
//   // div.appendChild(paragraph)
//   // document.body.appendChild(div)
// }

button.onclick = addBox
