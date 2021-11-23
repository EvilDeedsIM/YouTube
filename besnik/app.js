const image = document.querySelector(".preview .image");
const buttons = document.querySelector(".details .buttons");
const cost = document.querySelector(".details .cost");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const star = document.querySelector(".star:last-child");

let changeFlag = false;
let width = window.innerWidth;

buttons.addEventListener("click", ({ target }) => {
  if (target.tagName === "BUTTON") {
    image.classList.add("change");
    changeFlag = true;
  }
});

image.addEventListener("transitionend", () => {
  image.classList.remove("change");

  if (changeFlag) {
    changeFlag = false;
    if (image.style.backgroundImage === 'url("pngjoy1.png")') {
      image.style.backgroundImage = "url(pngaaa1.png)";
      cost.innerText = "$100.45";
      star.classList.toggle("active");
      return;
    }
    cost.innerText = "$124.95";
    image.style.backgroundImage = "url(pngjoy1.png)";
    star.classList.toggle("active");
  }
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (width <= 768) {
    menu.classList.toggle("active");
  }
});

menu.addEventListener("click", ({ target }) => {
  if (target.tagName === "A") {
    const links = Object.values(menu.children);
    links.forEach((e) => {
      e.classList.remove("active");
    });
    target.classList.add("active");
  }
});

window.addEventListener("resize", () => {
  width = window.innerWidth;
});
