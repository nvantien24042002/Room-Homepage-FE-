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
/* =========================
    ABOUT / HERO SLIDER
========================= */
const aboutImage = document.querySelector(".about__image");
const aboutTitle = document.querySelector(".about-content__title");
const aboutText = document.querySelector(".about-content__text");

const previousSlideButton = document.querySelector(".slider__previous");
const nextSlideButton = document.querySelector(".slider__next");

console.log(aboutImage," - ",aboutTitle," - ",aboutText);

console.log(previousSlideButton," - ",nextSlideButton);

const slides = [
    {
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: "assets/images/desktop-image-hero-1.jpg",
        alt: "Bright living room with modern sofa and decor"
    },
    {
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: "assets/images/desktop-image-hero-2.jpg",
        alt: "Three stylish chairs arranged in a clean interior"
    },
    {
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: "assets/images/desktop-image-hero-3.jpg",
        alt: "Minimalist black chair with soft lighting"
    }
];
let currentSlideIndex = 0;
function renderSlide() {
    const currentSlide = slides[currentSlideIndex];

    aboutImage.src = currentSlide.image;
    aboutImage.alt = currentSlide.alt;

    aboutTitle.textContent = currentSlide.title;
    aboutText.textContent = currentSlide.text;
}
function goNextSlide() {
    if (currentSlideIndex === slides.length - 1) {
        return;
    }

    currentSlideIndex++;
    renderSlide();
}
function goPreviousSlide() {
    if (currentSlideIndex === 0) {
        return;
    }

    currentSlideIndex--;
    renderSlide();
}
nextSlideButton.addEventListener("click", goNextSlide);
previousSlideButton.addEventListener("click", goPreviousSlide);