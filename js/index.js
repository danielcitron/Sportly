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

	$('#soccer').click(function() {
		if ($(this).hasClass("category-selected")){
			$('#block-story-1').removeClass('block-hidden');
			$('#block-story-3').removeClass('block-hidden');
			$('#block-story-4').removeClass('block-hidden');
			$('#block-story-5').removeClass('block-hidden');
			$('#soccer').removeClass('category-selected');
		}

		else
			$('#block-story-1').addClass('block-hidden');
			$('#block-story-3').addClass('block-hidden');
			$('#block-story-4').addClass('block-hidden');
			$('#block-story-5').addClass('block-hidden');
			$('#soccer').addClass('category-selected');
	});

});