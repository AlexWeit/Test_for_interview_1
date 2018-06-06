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
// ---- MODULES INITIALIZATION ----- //

$(document).ready(function() {
	
	if ($('.nav').length) {
		Menu.init();
	}

	if ($('.scroll').length) {
		Scroll.init();
	}

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiLCJzY3JvbGwuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLSBNZW51IE1vZHVsZSAtLS0tLS0tLS0tLS0tLy9cclxuXHJcbnZhciBNZW51ID0gKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBfY2xpY2tQaG9uZU1lbnUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBuYXYgPSAkKCcuaGVhZGVyX19tZW51X3Bob25lcycpO1xyXG5cclxuXHRcdCQoJ2JvZHknKS50b2dnbGVDbGFzcygnYm9keS1hY3RpdmUnKTtcclxuXHJcblx0XHRuYXYudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbWVudV9waG9uZXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0JCgnLmhlYWRlcl9fbWVudV9waG9uZXMtYnRuJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuaGVhZGVyX19tZW51X3Bob25lcy1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRfY2xpY2tQaG9uZU1lbnUoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcubWVudV9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdHZhciBsaW5rSHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuXHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChsaW5rSHJlZikub2Zmc2V0KCkudG9wIH0sIDUwMCk7XHJcblxyXG5cdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS1hY3RpdmUnKTtcclxuXHRcdFx0XHQkKCcuaGVhZGVyX19tZW51X3Bob25lcycpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX21lbnVfcGhvbmVzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdCQoJy5oZWFkZXJfX21lbnVfcGhvbmVzLWJ0bicpLnJlbW92ZUNsYXNzKCdvbicpO1x0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTtcclxuIiwiLy8tLS0tLSBTY3JvbGwgTW9kdWxlIC0tLS0tLS8vXHJcblxyXG52YXIgU2Nyb2xsID0gKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBfY2xpY2tTY3JvbGxEb3duID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyIGxpbmtIZWFkZXIgPSAkKCcuc2Nyb2xsLWhlYWRlcl9kb3duJykuZmluZCgnLnNjcm9sbC1kb3duX19saW5rJyksXHJcblx0XHRcdGxpbmtIcmVmID0gbGlua0hlYWRlci5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQobGlua0hyZWYpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG5cclxuXHR9O1xyXG5cclxuXHR2YXIgX2NsaWNrS2VlcFNjcm9sbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxpbmtDb250ZW50ID0gJCgnLnNjcm9sbC1jb250ZW50X2Rvd24nKS5maW5kKCcuc2Nyb2xsLWRvd25fX2xpbmsnKSxcclxuXHRcdFx0bGlua0hyZWYgPSBsaW5rSGVhZGVyLmF0dHIoJ2hyZWYnKTtcclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKGxpbmtIcmVmKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuXHR9O1xyXG5cdFxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLnNjcm9sbC1oZWFkZXJfZG93bicpLmZpbmQoJy5zY3JvbGwtZG93bl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdF9jbGlja1Njcm9sbERvd24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcuc2Nyb2xsLWNvbnRlbnRfZG93bicpLmZpbmQoJy5zY3JvbGwtZG93bl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdF9jbGlja0tlZXBTY3JvbGxpbmcoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyIsIi8vIC0tLS0gTU9EVUxFUyBJTklUSUFMSVpBVElPTiAtLS0tLSAvL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0aWYgKCQoJy5uYXYnKS5sZW5ndGgpIHtcclxuXHRcdE1lbnUuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aWYgKCQoJy5zY3JvbGwnKS5sZW5ndGgpIHtcclxuXHRcdFNjcm9sbC5pbml0KCk7XHJcblx0fVxyXG5cclxufSk7Il19
