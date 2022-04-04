var up = document.getElementsByClassName('up');
for (var i = 0; i < up.length; i++) {
  up[i].addEventListener('click', changeClass, false);
}

function changeClass() {
    $(this).toggleClass('up1');
    $('up').not(this).removeClass('up1');
}

