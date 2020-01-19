

//SELECTING ELEMENTS - ID















//SELECTING ELEMENTS - CLASS










//$












//METHODS - ADD COLOR - CSS











//METHODS - GET VALUE FROM INPUT














//METHODS - EVENT LISTENER

















//THIS

















//CREATING & ADDING ELEMENTS















//DYNAMIC EVENT LISTENERS



























//SELECTING ELEMENTS - ID
// const container = document.getElementById('container')
// const container = $('#container')
// console.log(container)


//SELECTING ELEMENTS - CLASS
// const textContent = document.getElementsByClassName('content')
// const textContent = $('.content')
// console.log(textContent)


//$
// console.log(jQuery)
// console.log($)


//METHODS - ADD COLOR - CSS
// $('.content').css('color', 'red')


//METHODS - GET VALUE FROM INPUT
// const getValue = function () {
//   const input = $('input').val()
//   console.log(input)
// }


//METHODS - EVENT LISTENER
// $('#submit').on('click', function () {
//   console.log('you clicked me')
// })

// $('#submit').click(function () {
//   console.log('Shorthand')
// })


//THIS
// console.log($('#para'))
// $('#para').on('click', function () {
//   let elem = $(this)
//   console.log(elem)
// })

//CREATING & ADDING ELEMENTS
// const header = document.createElement('h1')
// header.innerHTML = 'Im the header of the page'
// header.setAttribute('class', 'my-header')
// document.body.appendChild(header)

// const header = $('<h1 class="my-header">Im the new header</h1>')
// $('body').append(header)


//DYNAMIC EVENT LISTENERS

// const addDiv = function() {
//   $('#event-container').append('<div class=box>Some Box</div>')
// }

// $('#add').on('click', function() {
//   addDiv()
// })

// $('.box').on('click', function() {
//   alert('hi')
// })

// $('#event-container').on('click', '.box', function() {
//   alert('hi')
// })
