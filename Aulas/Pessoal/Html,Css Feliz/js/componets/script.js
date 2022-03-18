const movement = document.getElementById('movement')
let pixel = 0
if (pixel >= 100) {
}

function moveLeft() {
  pixel -= 20
  if (pixel <= -100) {
    movement.style.transition = 'none'
    pixel = 100
  } else {
    movement.style.transition = 'transform 1000ms ease-in-out'
  }
  movement.style.transform = `translateX(${pixel}%)`
}

function moveRight() {
  pixel += 20
  if (pixel >= 100) {
    movement.style.transition = 'none'
    pixel = -100
  } else {
    movement.style.transition = 'transform 1000ms ease-in-out'
  }
  movement.style.transform = `translateX(${pixel}%)`
}
