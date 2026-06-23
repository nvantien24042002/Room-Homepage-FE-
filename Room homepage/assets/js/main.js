const siteHeader = document.querySelector(".site-header");
console.log(siteHeader);
const hamburgerButton = document.querySelector(".site-header__hamburger");
console.log(hamburgerButton);
const closeButton = document.querySelector(".site-header__close")
console.log(closeButton);
const navLinks = document.querySelectorAll(".site-header__link")
console.log(navLinks);
function openMenu(){
    siteHeader.classList.add("is-open");
    hamburgerButton.setAttribute("aria-expanded","true");
}
function closeMenu() {
    siteHeader.classList.remove("is-open");
    hamburgerButton.setAttribute("aria-expanded", "false");
}
hamburgerButton.addEventListener("click",openMenu);
closeButton.addEventListener("click",closeMenu);
navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});