const header = document.querySelector(".site-header");
const hamburgerButton = document.querySelector(".site-header__hamburger");
const closeButton = document.querySelector(".site-header__close");
const navLinks = document.querySelectorAll(".site-header__link");

function openNavigation() {
    header.classList.add("is-open");
    hamburgerButton.setAttribute("aria-expanded", "true");
}

function closeNavigation() {
    header.classList.remove("is-open");
    hamburgerButton.setAttribute("aria-expanded", "false");
}

function toggleNavigation() {
    const isOpen = header.classList.contains("is-open");

    if (isOpen) {
        closeNavigation();
    } else {
        openNavigation();
    }
}

hamburgerButton.addEventListener("click", toggleNavigation);
closeButton.addEventListener("click", closeNavigation);

navLinks.forEach(function (link) {
    link.addEventListener("click", closeNavigation);
});