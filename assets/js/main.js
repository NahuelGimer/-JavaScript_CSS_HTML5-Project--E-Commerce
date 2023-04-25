/*=============== SWIPER PRODUCTS ===============*/

var swiperCategories = new Swiper(".tab__item", {
	slidesPerView: 24,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		720: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
	},
});
