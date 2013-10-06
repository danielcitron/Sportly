$( document ).ready(function() {

	var ticker_counter = 1;
	$('#ticker').click(function() {
		ticker_top = (-18 * ticker_counter);
		$('#ticker-container').css('top', ticker_top);
		ticker_counter++;
		if(ticker_counter == 4) {
			ticker_counter = 1;
		}
	});

	$('#menu-bar').mouseover(function() {
		if ($(".menu-dropdown").hasClass("hidden")){
			$('.menu-dropdown').removeClass('hidden');
			$('#menu-bar').addClass('expanded');
		}
	});

	$('#menu-bar').mouseout(function() {
		if (!$(".menu-dropdown").hasClass("hidden")){
			$('.menu-dropdown').addClass('hidden');
			$('#menu-bar').removeClass('expanded');
		}
	});

	//smooth scrolling - src: http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});