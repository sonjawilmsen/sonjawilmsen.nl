$(window).load(function() {
	var width, logoWidth = null;
	positionLogo();
});

$(window).resize(function() {
	positionLogo();
});

function positionLogo() {
	width = $('.header-container').width();
	logoWidth = $('.header-container .logo').width();
	
	$('.logo').css({ 'margin-left': (width / 2) - (logoWidth / 2) - 15  + "px" });
}