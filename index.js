/*window.addEventListener('scroll', function () {
  var element = document.querySelector('.scroll-element')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
})*/

window.addEventListener('scroll', function () {
  var element = document.querySelector('.section-2-h1')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
})

window.addEventListener('scroll', function () {
  var element = document.querySelector('.section-2-img')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
})
