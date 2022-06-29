const goTop = document.querySelector(".goTop");
const footerLayer = document.querySelector(".footerLayer");

goTop.addEventListener("click", function (e) {
  e.preventDefault();
  scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  goTop.style.opacity = scrollY - 900;
  if (window.innerHeight > footerLayer.getBoundingClientRect().top) {
    goTop.classList.add("positionChange");
  } else goTop.classList.remove("positionChange");
});
