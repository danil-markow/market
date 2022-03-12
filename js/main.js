$(function () {

	$('.slider__inner').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: '<button type="button" class="slick-next"><img src="images/next.jpg" alt=""></button>',
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000
	})
});
