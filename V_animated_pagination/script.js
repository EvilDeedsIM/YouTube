const pagButtons = document.querySelectorAll(".pagination__button");

pagButtons.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    const activeButton = document.querySelector(".active");

    if (activeButton) {
      activeButton.classList.remove("active");
    }

    e.target.classList.add("active");
  })
);
