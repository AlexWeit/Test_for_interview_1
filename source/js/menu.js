//--- Menu Module -------------//

var Menu = (function() {
	var _clickPhoneMenu = function() {
		var nav = $('.header__menu_phones');

		$('body').toggleClass('body-active');

		nav.toggleClass('header__menu_phones-active');

		$('.header__menu_phones-btn').toggleClass('on');
	};

	return {
		init: function() {
			$('.header__menu_phones-btn').on('click', function(e) {
				e.preventDefault();

				_clickPhoneMenu();
			});

			$('.menu__link').on('click', function(e) {
				e.preventDefault();

				var linkHref = $(this).attr('href');

				$('html, body').animate({ scrollTop: $(linkHref).offset().top }, 500);

				$('body').removeClass('body-active');
				$('.header__menu_phones').removeClass('header__menu_phones-active');
				$('.header__menu_phones-btn').removeClass('on');				
			});
		}
	}
})();
