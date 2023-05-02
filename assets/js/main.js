let subF1 = false,
	subF2 = false,
	subF3 = false,
	subF4 = false,
	dropF1 = false,
	cartF1 = false,
	cartF2 = false,
	cartF3 = false,
	cartF4 = false,
	cartF5 = false,
	cartF6 = false,
	cartF7 = false,
	cartF8 = false,
	heartF1 = false,
	heartF2 = false,
	heartF3 = false,
	heartF4 = false,
	heartF5 = false,
	heartF6 = false,
	heartF7 = false,
	heartF8 = false;

function closeNav() {
	document.getElementById("sidenav").style.animation = "collapse 0.3s forwards";
	document.getElementById("overlay").style.animation = "hide 0.3s";
	document.getElementById("overlay").style.display = "none";
}

function openNav() {
	document.getElementById("sidenav").style.animation = "expand 0.3s forwards";
	document.getElementById("sidenav").style.display = "block";
	document.getElementById("overlay").style.animation = "show 0.3s";
	document.getElementById("overlay").style.display = "block";
}

function sub1() {
	subF1 = !subF1;
	if (subF1) {
		document.getElementById("mainContainer").style.animation = "mainAway 0.3s";
		document.getElementById("subContainer1").style.animation = "subBack 0.3s";
		document.getElementById("mainContainer").style.display = "none";
		document.getElementById("subContainer1").style.display = "block";
	} else {
		document.getElementById("mainContainer").style.animation = "mainBack 0.3s";
		document.getElementById("subContainer1").style.animation = "subAway 0.3s";
		document.getElementById("subContainer1").style.display = "none";
		document.getElementById("mainContainer").style.display = "block";
	}
}

function sub2() {
	subF2 = !subF2;
	if (subF2) {
		document.getElementById("mainContainer").style.animation = "mainAway 0.3s";
		document.getElementById("subContainer2").style.animation = "subBack 0.3s";
		document.getElementById("mainContainer").style.display = "none";
		document.getElementById("subContainer2").style.display = "block";
	} else {
		document.getElementById("mainContainer").style.animation = "mainBack 0.3s";
		document.getElementById("subContainer2").style.animation = "subAway 0.3s";
		document.getElementById("subContainer2").style.display = "none";
		document.getElementById("mainContainer").style.display = "block";
	}
}

function sub3() {
	subF3 = !subF3;
	if (subF3) {
		document.getElementById("mainContainer").style.animation = "mainAway 0.3s";
		document.getElementById("subContainer3").style.animation = "subBack 0.3s";
		document.getElementById("mainContainer").style.display = "none";
		document.getElementById("subContainer3").style.display = "block";
	} else {
		document.getElementById("mainContainer").style.animation = "mainBack 0.3s";
		document.getElementById("subContainer3").style.animation = "subAway 0.3s";
		document.getElementById("subContainer3").style.display = "none";
		document.getElementById("mainContainer").style.display = "block";
	}
}

function sub4() {
	subF4 = !subF4;
	if (subF4) {
		document.getElementById("mainContainer").style.animation = "mainAway 0.3s";
		document.getElementById("subContainer4").style.animation = "subBack 0.3s";
		document.getElementById("mainContainer").style.display = "none";
		document.getElementById("subContainer4").style.display = "block";
	} else {
		document.getElementById("mainContainer").style.animation = "mainBack 0.3s";
		document.getElementById("subContainer4").style.animation = "subAway 0.3s";
		document.getElementById("subContainer4").style.display = "none";
		document.getElementById("mainContainer").style.display = "block";
	}
}

function drop() {
	dropF1 = !dropF1;
	if (dropF1) {
		document.getElementById("dropContainerArrow").classList.add("rotate");
		document.getElementById("dropContainerArrow").classList.remove("rotateAgain");
		document.getElementById("dropContainerDiv").style.display = "flex";
		document.getElementById("dropContainerDiv").style.animation = "expandDrop 0.3s forwards";
		document.getElementById("dropContainerDiv").style.transition = "height 0.3s";
		document.getElementById("dropContainerDiv").style.height = "600px";
	} else {
		document.getElementById("dropContainerArrow").classList.add("rotateAgain");
		document.getElementById("dropContainerArrow").classList.remove("rotate");
		document.getElementById("dropContainerDiv").style.animation = "collapseDrop 0.3s forwards";
		document.getElementById("dropContainerDiv").style.transition = "height 0.3s";
		document.getElementById("dropContainerDiv").style.height = "0px";
	}
}

function ad() {
	document.getElementById("categories-ad").classList.remove("up");
	document.getElementById("login-ad").classList.remove("up");
}

function cart1() {
	cartF1 = !cartF1;
	if (cartF1) {
		document.getElementById("cart1").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart1").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart1").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart1").classList.add("fi-rs-shopping-cart");
	}
}

function heart1() {
	heartF1 = !heartF1;
	if (heartF1) {
		document.getElementById("heart1").classList.remove("fi-rs-heart");
		document.getElementById("heart1").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart1").classList.remove("fi-ss-heart");
		document.getElementById("heart1").classList.add("fi-rs-heart");
	}
}

function cart2() {
	cartF2 = !cartF2;
	if (cartF2) {
		document.getElementById("cart2").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart2").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart2").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart2").classList.add("fi-rs-shopping-cart");
	}
}

function heart2() {
	heartF2 = !heartF2;
	if (heartF2) {
		document.getElementById("heart2").classList.remove("fi-rs-heart");
		document.getElementById("heart2").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart2").classList.remove("fi-ss-heart");
		document.getElementById("heart2").classList.add("fi-rs-heart");
	}
}

function cart3() {
	cartF3 = !cartF3;
	if (cartF3) {
		document.getElementById("cart3").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart3").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart3").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart3").classList.add("fi-rs-shopping-cart");
	}
}

function heart3() {
	heartF3 = !heartF3;
	if (heartF3) {
		document.getElementById("heart3").classList.remove("fi-rs-heart");
		document.getElementById("heart3").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart3").classList.remove("fi-ss-heart");
		document.getElementById("heart3").classList.add("fi-rs-heart");
	}
}

function cart4() {
	cartF4 = !cartF4;
	if (cartF4) {
		document.getElementById("cart4").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart4").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart4").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart4").classList.add("fi-rs-shopping-cart");
	}
}

function heart4() {
	heartF4 = !heartF4;
	if (heartF4) {
		document.getElementById("heart4").classList.remove("fi-rs-heart");
		document.getElementById("heart4").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart4").classList.remove("fi-ss-heart");
		document.getElementById("heart4").classList.add("fi-rs-heart");
	}
}

function cart5() {
	cartF5 = !cartF5;
	if (cartF5) {
		document.getElementById("cart5").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart5").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart5").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart5").classList.add("fi-rs-shopping-cart");
	}
}

function heart5() {
	heartF5 = !heartF5;
	if (heartF5) {
		document.getElementById("heart5").classList.remove("fi-rs-heart");
		document.getElementById("heart5").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart5").classList.remove("fi-ss-heart");
		document.getElementById("heart5").classList.add("fi-rs-heart");
	}
}

function cart6() {
	cartF6 = !cartF6;
	if (cartF6) {
		document.getElementById("cart6").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart6").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart6").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart6").classList.add("fi-rs-shopping-cart");
	}
}

function heart6() {
	heartF6 = !heartF6;
	if (heartF6) {
		document.getElementById("heart6").classList.remove("fi-rs-heart");
		document.getElementById("heart6").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart6").classList.remove("fi-ss-heart");
		document.getElementById("heart6").classList.add("fi-rs-heart");
	}
}

function cart7() {
	cartF7 = !cartF7;
	if (cartF7) {
		document.getElementById("cart7").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart7").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart7").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart7").classList.add("fi-rs-shopping-cart");
	}
}

function heart7() {
	heartF7 = !heartF7;
	if (heartF7) {
		document.getElementById("heart7").classList.remove("fi-rs-heart");
		document.getElementById("heart7").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart7").classList.remove("fi-ss-heart");
		document.getElementById("heart7").classList.add("fi-rs-heart");
	}
}

function cart8() {
	cartF8 = !cartF8;
	if (cartF8) {
		document.getElementById("cart8").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart8").classList.add("fi-ss-shopping-cart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("cart8").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart8").classList.add("fi-rs-shopping-cart");
	}
}

function heart8() {
	heartF8 = !heartF8;
	if (heartF8) {
		document.getElementById("heart8").classList.remove("fi-rs-heart");
		document.getElementById("heart8").classList.add("fi-ss-heart");
		document.getElementById("categories-ad").classList.add("up");
		document.getElementById("login-ad").classList.add("up");
	} else {
		document.getElementById("heart8").classList.remove("fi-ss-heart");
		document.getElementById("heart8").classList.add("fi-rs-heart");
	}
}
