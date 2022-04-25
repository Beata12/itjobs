const hamburgerFooter = document.querySelector(".container-hamburger");
const menuFooter = document.querySelector(".container-menu-mobile");

hamburgerFooter.addEventListener("click", function () {
	hamburgerFooter.classList.toggle("active");
	menuFooter.classList.toggle("active");
});
