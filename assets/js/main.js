var splide = new Splide(".splide", {
	type: "loop",
	autoplay: true,
	classes: {
		arrows: "splide__arrows",
		arrow: "splide__arrow",
		prev: "splide__arrow--prev",
		next: "splide__arrow--next",
	},
	breakpoints: {
		1350: {
			perPage: 1,
		},
		2440: {
			perPage: 3,
		},
	},
});

splide.mount();
