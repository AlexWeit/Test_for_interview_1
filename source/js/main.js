// ---- MODULES INITIALIZATION ----- //

$(document).ready(function() {
	
	if ($('.nav').length) {
		Menu.init();
	}

	if ($('.scroll').length) {
		Scroll.init();
	}

});