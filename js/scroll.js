const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const sproing = document.querySelectorAll(".sproing");
const slider = document.querySelector(".slides");

// header
window.addEventListener("wheel", function (e) {
  console.log(scrollY);
  if (window.scrollY >= 160) {
    header.classList.add("minimize");

    if (window.scrollY >= 1200) {
      if (e.deltaY < 0) {
        header.style.transform = `translateY(${0}px)`;
        header.style.opacity = 1;
      } else {
        header.style.transform = `translateY(${-100}px)`;
        header.style.opacity = 0;
      }
    }
  } else {
    header.classList.remove("minimize");
  }

  // sproing
  sproing.forEach((image) => {
    if (window.innerHeight > image.getBoundingClientRect().top + 200) {
      image.style.transform = "rotate(0)";
    }
  });

  if (window.innerHeight > slider.getBoundingClientRect().top + 200) {
    slider.style.opacity = 1;
    slider.style.transform = "translateX(0)";
  }
});
