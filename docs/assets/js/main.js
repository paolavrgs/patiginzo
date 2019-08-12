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