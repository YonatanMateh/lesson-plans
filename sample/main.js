const colors = ['blue', 'salmon', 'gold']

const render = function () {
  $('#colors-list').empty()

  for (let color of colors) {
      const colorElement = $(`<li>${color}</li>`)
      $('#colors-list').append(colorElement)
  }
}

render()


// Step two

$('#btn').on('click', function () {
  const color = $('#inp').val()
  // $('#colors-list').append(`<li>${color}</li>`) // BAD - show so they see the difference
  colors.push(color)

  render()
})