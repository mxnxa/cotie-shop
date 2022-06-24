const motionImages = document.querySelectorAll(".motionImg");

motionImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = `rotate(${45}deg)`;
  });
});
