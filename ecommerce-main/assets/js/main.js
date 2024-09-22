var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
let signinFormF1 = false,
	signupF1 = false,
	signinF1 = false,
	subF1 = false,
	subF2 = false,
	subF3 = false,
	subF4 = false,
	dropF1 = false,
	totalF1 = false,
	cartF1 = false,
	cartF2 = false,
	cartF3 = false,
	heartF1 = false,
	heartF2 = false,
	heartF3 = false;

function categoriesNav() {
	document.getElementById("categoriesNav").style.animation = "expandLeft 0.3s forwards";
	document.getElementById("categoriesNav").style.display = "block";
	document.getElementById("overlay").style.animation = "show 0.3s";
	document.getElementById("overlay").style.display = "block";
}

function closeCategories() {
	document.getElementById("categoriesNav").style.animation = "collapseLeft 0.3s forwards";
	document.getElementById("overlay").style.animation = "hide 0.3s";
	document.getElementById("overlay").style.display = "none";
}

function closeLogin() {
	document.getElementById("loginNav").style.animation = "collapseRight 0.3s forwards";
	document.getElementById("overlay").style.animation = "hide 0.3s";
	document.getElementById("overlay").style.display = "none";
}

function closeWishlist() {
	document.getElementById("wishlistNav").style.animation = "collapseRight 0.3s forwards";
	document.getElementById("overlay").style.animation = "hide 0.3s";
	document.getElementById("overlay").style.display = "none";
}

function closeCart() {
	document.getElementById("cartNav").style.animation = "collapseRight 0.3s forwards";
	document.getElementById("overlay").style.animation = "hide 0.3s";
	document.getElementById("overlay").style.display = "none";
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

function loginCategories() {
	document.getElementById("categoriesNav").style.animation = "collapseLeft 0.3s forwards";
	document.getElementById("login-ad").classList.remove("up");
}

function loginNav() {
	document.getElementById("loginNav").style.animation = "expandRight 0.3s forwards";
	document.getElementById("loginNav").style.display = "block";
	document.getElementById("overlay").style.animation = "show 0.3s";
	document.getElementById("overlay").style.display = "block";
}

function wishlistNav() {
	document.getElementById("wishlistNav").style.animation = "expandRight 0.3s forwards";
	document.getElementById("wishlistNav").style.display = "block";
	document.getElementById("overlay").style.animation = "show 0.3s";
	document.getElementById("overlay").style.display = "block";
	document.getElementById("ad-wishlist").style.display = "none";
}

function cartNav() {
	document.getElementById("cartNav").style.animation = "expandRight 0.3s forwards";
	document.getElementById("cartNav").style.display = "block";
	document.getElementById("overlay").style.animation = "show 0.3s";
	document.getElementById("overlay").style.display = "block";
	document.getElementById("ad-cart").style.display = "none";
}

function signinForm() {
	signinFormF1 = !signinFormF1;
	if (signinFormF1) {
		document.getElementById("signup").style.animation = "collapseSignin 0.3s forwards";
		document.getElementById("signup").style.display = "none";
		document.getElementById("signin").style.animation = "expandSignup 0.3s forwards";
		document.getElementById("signin").style.display = "block";
		document.getElementById("signupForm").reset();
		document.getElementById("signupFormStatus").innerHTML = "";
	} else {
		document.getElementById("signin").style.animation = "collapseSignup 0.3s forwards";
		document.getElementById("signin").style.display = "none";
		document.getElementById("signup").style.animation = "expandSignin 0.3s forwards";
		document.getElementById("signup").style.display = "block";
		document.getElementById("signinForm").reset();
		document.getElementById("signinFormStatus").innerHTML = "";
	}
}

function signup() {
	signupF1 = !signupF1;
	const nameUp = document.getElementById("signupName").value;
	const emailUp = document.getElementById("signupEmail").value;
	const passwordUp = document.getElementById("signupPassword").value;
	if (
		nameUp == null ||
		nameUp == "" ||
		emailUp == null ||
		emailUp == "" ||
		passwordUp == null ||
		passwordUp == ""
	) {
		document.getElementById("signupFormStatus").innerHTML =
			"Please complete all the information requested.";
		document.getElementById("signupFormStatus").style.color = "#FF0000";
		document.getElementById("signupSubmit").style.color = "#FF0000";
		setTimeout(() => {
			document.getElementById("signupSubmit").style.color = "#FFF";
		}, 1500);
	} else {
		const Users = JSON.parse(localStorage.getItem("users")) || [];
		const isUserRegistered = Users.find((user) => user.email === emailUp);
		if (isUserRegistered) {
			document.getElementById("signupFormStatus").innerHTML =
				"The email address is already registered.";
			document.getElementById("signupFormStatus").style.color = "#E5BE01";
			document.getElementById("signupSubmit").style.color = "#E5BE01";
			setTimeout(() => {
				document.getElementById("signupSubmit").style.color = "#FFF";
			}, 1500);
		} else {
			Users.push({name: nameUp, email: emailUp, password: passwordUp});
			localStorage.setItem("users", JSON.stringify(Users));
			document.getElementById("signupFormStatus").innerHTML = "Successfull Registration!";
			document.getElementById("signupFormStatus").style.color = "#008000";
			document.getElementById("signupSubmit").style.color = "#008000";
			setTimeout(() => {
				signinForm();
				document.getElementById("signupSubmit").style.color = "#FFF";
			}, 1250);
		}
	}
}

function signin() {
	signinF1 = !signinF1;
	const emailIn = document.getElementById("signinEmail").value;
	const passwordIn = document.getElementById("signinPassword").value;
	const Users = JSON.parse(localStorage.getItem("users")) || [];
	const validUser = Users.find((user) => user.email === emailIn && user.password === passwordIn);
	if (emailIn == null || emailIn == "" || passwordIn == null || passwordIn == "") {
		document.getElementById("signinFormStatus").innerHTML =
			"Please complete all the information requested.";
		document.getElementById("signinFormStatus").style.color = "#FF0000";
		document.getElementById("signinSubmit").style.color = "#FF0000";
		setTimeout(() => {
			document.getElementById("signinSubmit").style.color = "#FFF";
		}, 1500);
	} else {
		if (!validUser) {
			document.getElementById("signinFormStatus").innerHTML = "User or password incorrect";
			document.getElementById("signinFormStatus").style.color = "#FF0000";
			document.getElementById("signinSubmit").style.color = "#FF0000";
			setTimeout(() => {
				document.getElementById("signinSubmit").style.color = "#FFF";
			}, 1500);
		} else {
			document.getElementById("signinFormStatus").innerHTML = "Successfull Entry!";
			document.getElementById("signinFormStatus").style.color = "#008000";
			document.getElementById("signinSubmit").style.color = "#008000";
			setTimeout(() => {
				document.getElementById("signinSubmit").style.color = "#FFF";
				document.getElementById("signin").style.display = "none";
				document.getElementById("signinSuccess").style.animation = "collapseIn 0.3s forwards";
				document.getElementById("signinSuccess").style.display = "flex";
				localStorage.setItem("login-success", JSON.stringify(validUser));
				document.getElementById("signinForm").reset();
				document.getElementById("signinFormStatus").innerHTML = "";
				document.getElementById("signinSuccessName").innerHTML = `Welcome ${validUser.name}!`;
				document.getElementById("sidenavHello").innerHTML = `Hello, ${validUser.name}.`;
				document.getElementById("loginMenu").innerHTML = "Loged";
			}, 1250);
		}
	}
}

function logout() {
	localStorage.removeItem("login-success");
	document.getElementById("signinSuccess").style.display = "none";
	document.getElementById("signin").style.display = "flex";
	document.getElementById("sidenavHello").innerHTML = `Hello, Sign In.`;
	document.getElementById("loginMenu").innerHTML = "Login";
}

function cartTotal1() {
	var total1 = 0;

	var priceElement1 = document.getElementById("sidenavCartDescriptionPriceNew1");
	var quantityElement1 = document.getElementById("sidenavCartDescriptionQuantity1");
	var price1 = priceElement1.innerHTML.replace("$", "");
	var quantity1 = quantityElement1.value;
	total1 = total1 + price1 * quantity1;
	document.getElementById("sidenavDescriptionSubtotalPrice1").innerHTML = "$" + total1;
}

function cartTotal2() {
	var total2 = 0;
	var priceElement2 = document.getElementById("sidenavCartDescriptionPriceNew2");
	var quantityElement2 = document.getElementById("sidenavCartDescriptionQuantity2");
	var price2 = priceElement2.innerHTML.replace("$", "");
	var quantity2 = quantityElement2.value;
	total2 = total2 + price2 * quantity2;

	document.getElementById("sidenavDescriptionSubtotalPrice2").innerHTML = "$" + total2;
}

function cartTotal3() {
	var total3 = 0;
	var priceElement3 = document.getElementById("sidenavCartDescriptionPriceNew3");
	var quantityElement3 = document.getElementById("sidenavCartDescriptionQuantity3");
	var price3 = priceElement3.innerHTML.replace("$", "");
	var quantity3 = quantityElement3.value;
	total3 = total3 + price3 * quantity3;

	document.getElementById("sidenavDescriptionSubtotalPrice3").innerHTML = "$" + total3;
}

function cartTotal() {
	var total1 = 0;
	var total2 = 0;
	var total3 = 0;
	var total4 = 0;
	var priceElement1 = document.getElementById("sidenavCartDescriptionPriceNew1");
	var priceElement2 = document.getElementById("sidenavCartDescriptionPriceNew2");
	var priceElement3 = document.getElementById("sidenavCartDescriptionPriceNew3");
	var quantityElement1 = document.getElementById("sidenavCartDescriptionQuantity1");
	var quantityElement2 = document.getElementById("sidenavCartDescriptionQuantity2");
	var quantityElement3 = document.getElementById("sidenavCartDescriptionQuantity3");
	var price1 = priceElement1.innerHTML.replace("$", "");
	var price2 = priceElement2.innerHTML.replace("$", "");
	var price3 = priceElement3.innerHTML.replace("$", "");
	var quantity1 = quantityElement1.value;
	var quantity2 = quantityElement2.value;
	var quantity3 = quantityElement3.value;
	total1 = total1 + price1 * quantity1;
	total2 = total2 + price2 * quantity2;
	total3 = total3 + price3 * quantity3;
	total4 = total1 + total2 + total3;

	document.getElementById("sidenavCartBuyTotalPrice").innerHTML = "$" + Math.floor(total4);
}

function cartTrash1() {
	document.getElementById("sidenavCartProduct1").style.display = "none";
	document.getElementById("sidenavCartDescriptionQuantity1").value = 0;
	cart1();
}
function cartTrash2() {
	document.getElementById("sidenavCartProduct2").style.display = "none";
	document.getElementById("sidenavCartDescriptionQuantity2").value = 0;
	cart2();
}
function cartTrash3() {
	document.getElementById("sidenavCartProduct3").style.display = "none";
	document.getElementById("sidenavCartDescriptionQuantity3").value = 0;
	cart3();
}

function wishlistTrash1() {
	document.getElementById("sidenavWishlistProduct1").style.display = "none";
	heart1();
}
function wishlistTrash2() {
	document.getElementById("sidenavWishlistProduct2").style.display = "none";
	heart2();
}
function wishlistTrash3() {
	document.getElementById("sidenavWishlistProduct3").style.display = "none";
	heart3();
}

function cart1() {
	cartF1 = !cartF1;
	if (cartF1) {
		document.getElementById("cart1").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart1").classList.add("fi-ss-shopping-cart");
		document.getElementById("sidenavCartProduct1").style.display = "block";
		document.getElementById("ad-cart").style.display = "block";
		document.getElementById("sidenavCartDescriptionQuantity1").value =
			document.getElementById("sidenavCartDescriptionQuantity1").value + 1;
		cartTotal();
		cartTotal1();
	} else {
		document.getElementById("cart1").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart1").classList.add("fi-rs-shopping-cart");
		document.getElementById("sidenavCartProduct1").style.display = "none";
		document.getElementById("sidenavCartDescriptionQuantity1").value = 0;
		cartTotal();
	}
}

function heart1() {
	heartF1 = !heartF1;
	if (heartF1) {
		document.getElementById("heart1").classList.remove("fi-rs-heart");
		document.getElementById("heart1").classList.add("fi-ss-heart");
		document.getElementById("sidenavWishlistProduct1").style.display = "block";
		document.getElementById("ad-wishlist").style.display = "block";
	} else {
		document.getElementById("heart1").classList.remove("fi-ss-heart");
		document.getElementById("heart1").classList.add("fi-rs-heart");
		document.getElementById("sidenavWishlistProduct1").style.display = "none";
	}
}

function cart2() {
	cartF2 = !cartF2;
	if (cartF2) {
		document.getElementById("cart2").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart2").classList.add("fi-ss-shopping-cart");
		document.getElementById("sidenavCartProduct2").style.display = "block";
		document.getElementById("ad-cart").style.display = "block";
		document.getElementById("sidenavCartDescriptionQuantity2").value =
			document.getElementById("sidenavCartDescriptionQuantity2").value + 1;
		cartTotal();
		cartTotal2();
	} else {
		document.getElementById("cart2").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart2").classList.add("fi-rs-shopping-cart");

		document.getElementById("sidenavCartProduct2").style.display = "none";
		document.getElementById("sidenavCartDescriptionQuantity2").value = 0;
		cartTotal();
	}
}

function heart2() {
	heartF2 = !heartF2;
	if (heartF2) {
		document.getElementById("heart2").classList.remove("fi-rs-heart");
		document.getElementById("heart2").classList.add("fi-ss-heart");
		document.getElementById("sidenavWishlistProduct2").style.display = "block";
		document.getElementById("ad-wishlist").style.display = "block";
	} else {
		document.getElementById("heart2").classList.remove("fi-ss-heart");
		document.getElementById("heart2").classList.add("fi-rs-heart");
		document.getElementById("sidenavWishlistProduct2").style.display = "none";
	}
}

function cart3() {
	cartF3 = !cartF3;
	if (cartF3) {
		document.getElementById("cart3").classList.remove("fi-rs-shopping-cart");
		document.getElementById("cart3").classList.add("fi-ss-shopping-cart");
		document.getElementById("sidenavCartProduct3").style.display = "block";
		document.getElementById("ad-cart").style.display = "block";
		document.getElementById("sidenavCartDescriptionQuantity3").value =
			document.getElementById("sidenavCartDescriptionQuantity3").value + 1;
		cartTotal();
		cartTotal3();
	} else {
		document.getElementById("cart3").classList.remove("fi-ss-shopping-cart");
		document.getElementById("cart3").classList.add("fi-rs-shopping-cart");

		document.getElementById("sidenavCartProduct3").style.display = "none";
		document.getElementById("sidenavCartDescriptionQuantity3").value = 0;
		cartTotal();
	}
}

function heart3() {
	heartF3 = !heartF3;
	if (heartF3) {
		document.getElementById("heart3").classList.remove("fi-rs-heart");
		document.getElementById("heart3").classList.add("fi-ss-heart");
		document.getElementById("sidenavWishlistProduct3").style.display = "block";
		document.getElementById("ad-wishlist").style.display = "block";
	} else {
		document.getElementById("heart3").classList.remove("fi-ss-heart");
		document.getElementById("heart3").classList.add("fi-rs-heart");
		document.getElementById("sidenavWishlistProduct3").style.display = "none";
	}
}
