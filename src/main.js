const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-expanded", false)
  : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

//https://a11yslider.js.org/

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplaySpeed: 4000,
});