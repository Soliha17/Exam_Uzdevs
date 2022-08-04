// function toggleMobileMenu(menu) {
//   menu.classList.toggle("open");
// }
// Select required elements from the DOM
const modal = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const headerBtn = document.querySelector(".header-btn-first");

const toggleMobileMenu = function (menu) {
  menu.classList.toggle("open");
  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
    headerBtn.style.display = "none";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
    headerBtn.style.display = "flex";
  }
};
