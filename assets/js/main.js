var splide = new Splide(".splide", {
	type: "loop",
	perPage: 1,
	autoplay: true,
	classes: {
		arrows: "splide__arrows",
		arrow: "splide__arrow",
		prev: "splide__arrow--prev",
		next: "splide__arrow--next",
	},
});

splide.mount();
