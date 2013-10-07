$( document ).ready(function() {

	var ticker_counter = 1;
	var hold = 0;
	window.setInterval(function() {	
		
		//on hover, stop ticker
		$('#ticker').mouseenter(function() {
			hold = 1
		});

		$('#ticker').mouseout(function() {
			hold = 0
		});

		if(hold == 1) {
        	return;
   		}

   		//animate ticker
		$('#ticker').each(function() {
			
			ticker_top = ((ticker_counter * -18)+18);
			$('#ticker-container').css('top', ticker_top);
			ticker_counter++;
			if(ticker_counter == 6) {
				ticker_counter = 1;
			}
		});
	}, 1500);

/*	$('#menu-bar').mouseenter(function() {
		if (!$("#menu-bar").hasClass("expanded")){
			$('#menu-bar').addClass('expanded');
		}
	});

	$('#menu-bar').mouseleave(function() {
		if ($("#menu-bar").hasClass("expanded")){
			$('#menu-bar').removeClass('expanded');
		}
	}); */

	
	//scrollers for dropdown menu
	$('.view-more-right').click(function() {
		$('.menu-dropdown').animate( { scrollLeft: '+=250' }, 500 ); 
	});

	$('.view-more-left').click(function() {
		$('.menu-dropdown').animate( { scrollLeft: '-=250' }, 500 ); 
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