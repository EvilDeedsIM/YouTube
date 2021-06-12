const upper = document.querySelector(".upper");
const items = document.querySelectorAll(".nav__item");

let activeItem = document.querySelector(".active");
let color = activeItem.classList[1];
let colors = {
  red: "#ff0000",
  blue: "#1a53ff",
  green: "#009933",
  purple: "#cc33ff",
  orange: "#ac7339",
};

document.body.style.backgroundColor = colors[color];
upper.style.left = `${activeItem.parentElement.offsetLeft - 47.5}px`;

items.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    upper.style.left = `${e.currentTarget.offsetLeft - 47.5}px`;
    activeItem = document.querySelector(".active");
    activeItem.classList.remove("active");
    elem.children[0].classList.add("active");

    color = elem.children[0].classList[1];
    document.body.style.backgroundColor = colors[color];
  });
});
