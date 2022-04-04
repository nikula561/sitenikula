var Cart = document.getElementsByClassName('Cart');
for (var i = 0; i < Cart.length; i++) {
  Cart[i].addEventListener('click', changeClass, false);
}

function changeClass() {
    $(this).toggleClass('Cart1');
    $('Cart').not(this).removeClass('Cart');
}
