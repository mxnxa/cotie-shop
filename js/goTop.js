const goTop = document.querySelector(".goTop");

goTop.addEventListener("click", function (e) {
  e.preventDefault();
  scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  goTop.style.opacity = scrollY - 900;
  //   if (scrollY - 900) goTop.style.visibility = "visible";
  console.log(window.scrollY);
});
