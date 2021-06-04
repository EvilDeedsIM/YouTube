const line = document.querySelector(".nav__line");
const item = document.querySelectorAll(".nav__item");

line.style.width = `${item[0].offsetWidth}px`;

item.forEach((elem) => {
  elem.addEventListener("mouseenter", (e) => {
    line.style.width = `${e.currentTarget.offsetWidth}px`;
    line.style.left = `${e.currentTarget.offsetLeft}px`;
  });

  elem.addEventListener("mouseleave", () => {
    line.style.width = `${item[0].offsetWidth}px`;
    line.style.left = `0`;
  });
});
