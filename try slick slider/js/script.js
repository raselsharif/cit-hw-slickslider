// $('.banner_wrapper').slick({
//     arrows: true,
//     prevArrow: ".prev",
//     nextArrow: ".next",
//     fade: true,
//     dots: true,
//     focusOnSelect: true,
//     initialSlide: 0,
//     lazyLoad: 'ondemand',
//     slidesPerRow: 0,
//     slidesToShow: 1,
//     swipeToSlide: true,
// });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.banner_wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".multiprev",
    nextArrow: ".multinext",
  });