// EVENTS HEADER
const siteHeader = document.querySelector(".site-header");
// console.log(siteHeader);
const hamburgerButton = document.querySelector(".site-header__hamburger");
// console.log(hamburgerButton);
const closeButton = document.querySelector(".site-header__close")
// console.log(closeButton);
const navLinks = document.querySelectorAll(".site-header__link")
// console.log(navLinks);
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
// EVENTS SLIDER
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
const aboutImage = document.querySelector(".about__image");
console.log(aboutImage)
const previousSlider = document.querySelector(".slider__previous");
console.log(previousSlider)
const nextSlider = document.querySelector(".slider__next");
console.log(nextSlider)
const aboutTitle = document.querySelector(".about-content__title");
console.log(aboutTitle)
const aboutText = document.querySelector(".about-content__text");
console.log(aboutText)

let currentSlideIndex = 0;
/*
Slide 1 → index 0
Slide 2 → index 1
Slide 3 → index 2
*/
function renderSlider() {
    const currentSlide = slides[currentSlideIndex];
    aboutImage.src = currentSlider.image;
    aboutImage.alt = currentSlider.alt;
    aboutTitle.textContent = currentSlider.title;
    aboutText.textContent = currentSlider.text;
}