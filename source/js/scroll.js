//----- Scroll Module ------//

var Scroll = (function() {
	var _clickScrollDown = function() {

		var linkHeader = $('.scroll-header_down').find('.scroll-down__link'),
			linkHref = linkHeader.attr('href');

		$('html, body').animate({ scrollTop: $(linkHref).offset().top }, 500);

	};

	var _clickKeepScrolling = function() {
		var linkContent = $('.scroll-content_down').find('.scroll-down__link'),
			linkHref = linkHeader.attr('href');
		$('html, body').animate({ scrollTop: $(linkHref).offset().top }, 500);
	};
	
	return {
		init: function() {
			$('.scroll-header_down').find('.scroll-down__link').on('click', function(e) {
				e.preventDefault();

				_clickScrollDown();
			});

			$('.scroll-content_down').find('.scroll-down__link').on('click', function(e) {
				e.preventDefault();

				_clickKeepScrolling();
			});
		}
	}
})();