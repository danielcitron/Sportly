$( document ).ready(function() {

    $('#search').waypoint('sticky', {
    	offset: 75
    });

	$('#block-story-1').click(function() {
		$('#story-loader').addClass('story-loading');
	});

	$('#close-button').click(function() {
		$('#story-loader').removeClass('story-loading');
	});

	$('#block-story-1').hover(function() {
		$('#block-title-container').addClass('title-visible');
	});

	$('#block-story-1').mouseout(function() {
		$('#block-title-container').removeClass('title-visible');
	});

});