const checkList = document.getElementById('services')
checkList.getElementsByClassName('anchor')[0].onclick = (e) => {
  if (checkList.classList.contains('visible')) {
    checkList.classList.remove('visible')
  } else {
    checkList.classList.add('visible')
  }
}
