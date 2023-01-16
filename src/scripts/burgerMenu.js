let menuBtn = document.querySelector(".burger-menu-button");
let menu = document.querySelector(".burger-menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
