/*=============== SWIPER PRODUCTS ===============*/

var swiperCategories = new Swiper(".tab__item", {
	centeredSlides: true,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			centeredSlides: true,
		},
		720: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},
});
