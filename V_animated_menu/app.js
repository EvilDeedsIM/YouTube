const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".ui__btn");

openBtn.addEventListener("click", () => {
  changeActiveState(menu);
  changeActiveState(openBtn);
});

function changeActiveState(obj) {
  if (obj.classList.contains("active")) {
    obj.classList.remove("active");
  } else {
    obj.classList.add("active");
  }
}
