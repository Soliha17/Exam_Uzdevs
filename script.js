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
window.onscroll = function () {
  myFunction();
};

var header = document.querySelector('.wrapper');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// FOR BACK TO TOP BUTTON

// Get the button
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}