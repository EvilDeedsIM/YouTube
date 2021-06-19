const items = document.querySelectorAll(".nav__item a");

items.forEach((elem) =>
  elem.addEventListener("click", () => {
    const activeElement = document.querySelector(".active");
    const list = elem.classList;
    const listArray = Object.values(list);

    if (listArray.includes("active")) {
      elem.classList.remove("active");
    } else {
      activeElement.classList.remove("active");
      elem.parentElement.classList.add("active");
    }
  })
);
