$( document ).ready(function() {

	$('.score-text').mouseover(function() {
		$(this).addClass('open');
		$(this).parent().find('.score-photo').addClass('closed');
	});

	$('.score-text').mouseout(function() {
		$(this).removeClass('open');
		$(this).parent().find('.score-photo').removeClass('closed');
	});
	
});