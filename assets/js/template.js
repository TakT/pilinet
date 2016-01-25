jQuery(document).ready(function($) {

	jQuery('.dropdown-menu a').on('click', function() {
		jQuery(this).parents('.dropdown').find('.dropdown-toggle span').text(jQuery(this).text());
	})

	jQuery('.filter .filter__item .filter__item-title a').on('click', function(event) {
		jQuery(this).parents('.filter__item').toggleClass('active');
	});

	jQuery('.citychange__wrapper > a').on('click', function(event) {
		jQuery(this).parents('.citychange__wrapper').find('.citychange__cities').toggleClass('active');
	});
});