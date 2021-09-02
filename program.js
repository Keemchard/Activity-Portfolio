let homebtn = document.querySelector(".home-btn");
let resumebtn = document.querySelector(".resume-btn");
let aboutbtn = document.querySelector(".about-btn");

let home = document.querySelector(".home");
let resume = document.querySelector(".resume");
let about = document.querySelector(".about");
window.onload = function () {
  home.classList.toggle("show-home");
};

homebtn.addEventListener("click", function () {
  home.style.display = "flex";
  home.classList.toggle("show-home");
  resume.style.display = "none";
  about.style.display = "none";
});
resumebtn.addEventListener("click", function () {
  resume.style.display = "flex";
  resume.classList.toggle("show-resume");
  home.style.display = "none";
  about.style.display = "none";
});
aboutbtn.addEventListener("click", function () {
  about.style.display = "flex";
  about.classList.toggle("show-about");
  home.style.display = "none";
  resume.style.display = "none";
});

let btnFromHomeToAbout = document.querySelector(".btn-from-h-a");
btnFromHomeToAbout.addEventListener("click", function () {
  about.style.display = "flex";
  about.classList.toggle("show-about");
  home.style.display = "none";
  resume.style.display = "none";
});
