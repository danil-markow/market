$(document).ready(function () {
	$('.menu-burger__header').click(function () {
		$('.menu-burger__header').toggleClass('open-menu');
		$('.header__menu').toggleClass('open-menu');
	});
});