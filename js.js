function showmenu() {

  document.getElementById('remline')
  if (remline.style.display != 'none') {
    remline.style.display = 'none'
  }
  else {
    remline.style.display = 'block'
  }
  document.getElementById('headside')
  if (headside.style.display != 'block') {
    headside.style.display = 'block'
  }
  else {
    headside.style.display = 'none'
  }

  document.getElementById('cross1')
  if (cross1.style.transform != 'rotate(-50deg)') {
    cross1.style.transform = 'rotate(-50deg)'
    cross1.style.position = 'absolute'
    cross1.style.top = '0.5px'
    cross1.style.transition = '0.3s'
  }
  else {

    cross1.style.position = 'relative'
    cross1.style.transform = 'rotate(0deg)'
  }

  document.getElementById('cross2')
  if (cross2.style.transform != 'rotate(50deg)') {
    cross2.style.transition = '0.4s'
    cross2.style.position = 'absolute'
    cross2.style.top = '0.5px'
    cross2.style.transform = 'rotate(50deg)'
  }
  else {
    cross2.style.position = 'relative'

    cross2.style.transform = 'rotate(0deg)'
  }
}

function subform() {
  document.getElementById('sub')
  if (sub.style.display != 'none') {
    sub.style.display = 'block';
  }
}

function openlessons() {

  document.getElementById('lessons')
  if (lessons.style.display != 'none') {
    lessons.style.display = 'block'
  }
  else {
    lessons.style.display = 'none'
  }
}
/* web headet ends */
function liker() {
  let like1 = document.getElementById('like');
  like1.value = parseInt(like1.value) + 1;
  like1.style.color = 'yellowgreen';
}

function disliker() {
  let dislike1 = document.getElementById('dislike');
  dislike1.value = parseInt(dislike1.value) + 1;
  dislike1.style.color = 'red';
}
