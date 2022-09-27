// Variables
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

// Menu Toggle
menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  bell.classList.remove("active");
};

// Notification toggle
let bell = document.querySelector(".notification");
document.querySelector("#bell-icon").onclick = () => {
  bell.classList.toggle("active");
};

// Swipe Function
var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ScrollBar OnScroll Function
window.onscroll = function () {
  mufunction();
};

function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}
