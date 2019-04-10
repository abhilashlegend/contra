jQuery(document).ready(function($) {

	$('#block-contra-main-menu li').hover(function() {
		$(this).parent().find('.sub-menu').toggle();
	})
})