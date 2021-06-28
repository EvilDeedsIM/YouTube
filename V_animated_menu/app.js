const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".ui__btn");

openBtn.addEventListener("click", () => {
  menuScale();
  buttonRotate();
});

function menuScale() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

function buttonRotate() {
  if (openBtn.classList.contains("active")) {
    openBtn.classList.remove("active");
  } else {
    openBtn.classList.add("active");
  }
}
