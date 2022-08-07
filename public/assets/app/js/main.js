

(function ($) {
	'use strict';

	//=== 07. Back to top
	function showBackToTop() {
		var scroll = $(window).scrollTop();

		if (scroll > 600) {
			$('.back-to-top').fadeIn(200)
		} else {
			$('.back-to-top').fadeOut(200)
		}
	}
	function backToTop() {
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();

			$('html, body').animate({
				scrollTop: 0,
			}, 1500);
		});
	}

	//===== 15. Sticky Header
	function stickyHeader() {
		var sticky = $('header.sticky-header');
		var scrollFromtop = $(window).scrollTop();
		var scrollLimit = $('header').height() + 10;

		if (scrollFromtop < scrollLimit) {
			sticky.removeClass('sticky-on');
		} else {
			sticky.addClass('sticky-on');
		}
	}

	/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
	$(document).ready(function () {
		backToTop();
	});

	/*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
	$(window).on('scroll', function () {
		showBackToTop();
		stickyHeader();
	});


	/*------------------
	=== WINDOW LOAD  ===
	--------------------*/
	$(window).on('load', function () {
		new WOW().init();
	});

})(jQuery);