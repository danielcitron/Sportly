$( document ).ready(function() {

	$('.score-text').mouseover(function() {
		$(this).addClass('open');
		$(this).parent().find('.score-photo').addClass('closed');
	});

	$('.scorebox').mouseout(function() {
		$(this).find('.score-text').removeClass('open');
		$(this).find('.score-photo').removeClass('closed');
	});
	
});