WebFont.load({
  google: {
    families: ['Merriweather:400,700', 'Prata', 'Roboto']
  }
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true
});

/*-------------------
  Quantity change
--------------------- */
var proQty = $('.pro-qty');
proQty.prepend('<span class="dec qtybtn">-</span>');
proQty.append('<span class="inc qtybtn">+</span>');
proQty.on('click', '.qtybtn', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc')) {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});

$('.product-pic-zoom').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-thumbs-track'
});
$('.product-thumbs-track').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-pic-zoom',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});