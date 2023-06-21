
$('.testmFlex').slick({
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: ".testmPrev",
  nextArrow:".testmNext",
  autoplay: true,
  lazyLoad: 'progressive',
  // fade: true,
});
$('.blogFlex').slick({
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".blogPrev",
  nextArrow:".blogNext",
  autoplay: false,
  lazyLoad: 'progressive',
  // fade: true,
});
$('.portFlex').slick({
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prtfPrev",
  nextArrow:".portfNext",
  autoplay: false,
  lazyLoad: 'progressive',
  // fade: true,
});