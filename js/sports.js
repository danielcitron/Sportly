$( document ).ready(function() {

	//overlays sidebar
    $('.sidebar-expander').click(function() {
    	if($(this).hasClass('expanded')){
			$(this).removeClass('expanded');
			$('#sidebar').removeClass('visible');
		}
		else {
			$(this).addClass('expanded');
			$('#sidebar').addClass('visible');
		}
	});
});
