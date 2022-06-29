const info = document.querySelector(".info");
const infoBtn = document.querySelector(".infoBtn");

// footer info
infoBtn.addEventListener("click", function () {
  if (info.classList.contains("active")) info.classList.remove("active");
  else info.classList.add("active");
});
