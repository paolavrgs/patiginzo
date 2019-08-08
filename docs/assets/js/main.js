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

$(window).scroll(function () {
  scroll = $(window).scrollTop()
  scrollplus = scroll + 400
  svg_top = $(".svgs.parallax").position().top
  team_top = $(".faq").position().top
  team_bottom = $(".faq").outerHeight(true)

  if (((scrollplus) >= team_top) && (scrollplus <= (team_top + team_bottom) - 500)) {
    $(".svgs.parallax").css({
      transform: `translateY(${(scrollplus - team_top) * 0.8}px)`,
    })
  }
})