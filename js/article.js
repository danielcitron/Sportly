$( document ).ready(function() {

        //sticks article header to top on scroll
        $('.article-header').waypoint('sticky', {
        	offset: 75
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
