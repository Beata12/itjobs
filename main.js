const containerMain = document.querySelector(".categories-container-bar");
const mobileMain = document.querySelector(".menu-cont-mobile");

containerMain.addEventListener("click", function () {
	containerMain.classList.toggle("active");
	mobileMain.classList.toggle("active");
});
