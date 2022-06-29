const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const count = slideImg.length;

let currentIdx = 0;
const slideImgWidth = 486;
const slideImgPadding = 42;
const slideWidth = slideImgWidth + slideImgPadding;

function moveSlide(num) {
  slides.style.transform = `translate(${-slideWidth * num}px)`;
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx < count - 3) moveSlide(currentIdx + 1);
});
