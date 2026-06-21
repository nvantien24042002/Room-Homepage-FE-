const header = document.querySelector(".site-header");
const hamburgerButton = document.querySelector(".site-header__hamburger");
const closeButton = document.querySelector(".site-header__close");
const navLinks = document.querySelectorAll(".site-header__link");
// Event open nav menu
function openNavigation(){
    header.classList.add("is-open");
    hamburgerButton.setAttribute("aria-expanded", "true");
}
// Event close nav menu
function closeNavigation() {
    header.classList.remove("is-open");
    hamburgerButton.setAttribute("aria-expanded", "false");
}
hamburgerButton.addEventListener("click", openNavigation);
closeButton.addEventListener("click", closeNavigation);
navLinks.forEach(function (link) {
    link.addEventListener("click", closeNavigation);
});