let loader = document.querySelector(".loader");
let close = document.querySelector("#close");
let mobileHam = document.querySelector(".mobileHam");
let insideHams = document.querySelectorAll(".insideHam");
let ham = document.querySelector(".ham");

setTimeout(() => {
  loader.style.display = "none";
}, 2850);
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

insideHams.forEach((insideHam) => {
  insideHam.addEventListener("click", () => {
    mobileHam.style.display = "none";
    ham.style.display = "block";
    let bodyWidth = parseInt(
      getComputedStyle(document.body).getPropertyValue("width")
    );
    if (bodyWidth > 600) {
      ham.style.display = "none";
    }
  });
});
close.addEventListener("click", () => {
  mobileHam.style.display = "none";
  ham.style.display = "block";
});
ham.addEventListener("click", () => {
  ham.style.display = "none";
  mobileHam.style.display = "block";
});
