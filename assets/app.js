;(function ($) {
	$(document).ready(function () {
		$(".shopotam-items-carousel").owlCarousel({
			nav: true,
			navText: ['', ''],
			dots: false,
			items: 3,
			loop: true,
			responsive: {
				0: {
					items: 2,
					stagePadding: 20,
					nav: false,
				},
				576: {
					items: 3,
					stagePadding: 50,
					nav: true,
				},
				//768: {
					//items: 4,
				//},
				//1024: {
					//items: 5,
				//},
			}
		});
	});
})(jQuery);
