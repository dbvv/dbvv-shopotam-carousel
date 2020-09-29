;(function ($) {
	$(document).ready(function () {
		$(".shopotam-items-carousel").owlCarousel({
			nav: true,
			navText: ['', ''],
			dots: false,
			items: 5,
			loop: true,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 3,
				},
				768: {
					stagePadding: 50,
					items: 4,
				},
				1024: {
					items: 5,
				},
			}
		});
	});
})(jQuery);
