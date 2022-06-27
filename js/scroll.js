const visualImg = document.querySelector(".visualImg");

// window.addEventListener("load", function () {
//   visualImg.style.transform = `rotate(${0}deg)`;
//   visualImg.style.opacity = 1;
// });

const fish = document.querySelector(".fish");

window.addEventListener("scroll", function () {
  // fish.style.
});

const header = document.querySelector("header");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  console.log(scrollY);
  if (window.scrollY >= 160) {
    header.classList.add("minimize");
    logo.classList.add("minimize");
  } else {
    header.classList.remove("minimize");
    logo.classList.remove("minimize");
  }
  if (window.scrollY >= 1200) {
    header.style.transform = `translateY(${-100}px)`;
    header.style.opacity = 0;
  } else {
    header.style.transform = `translateY(${0}px)`;
    header.style.opacity = 1;
  }
});
