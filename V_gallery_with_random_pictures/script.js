const body = document.querySelector("body");
const shuffleBtn = document.querySelector(".shuffle-btn");
const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".item__img");

const imageLinks = [
  "https://images.unsplash.com/photo-1555600341-3ab8d338991d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80",
  "https://images.unsplash.com/photo-1607753725249-8f85f2d4a884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1545593169-527754e9edd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1626159222245-eb87faff05f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80",
  "https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80",
  "https://images.unsplash.com/photo-1610072163764-93cab353a095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
];

shuffleImages();
checkOrientation();

window.addEventListener("resize", () => {
  checkOrientation();
});

shuffleBtn.addEventListener("click", shuffleImages);

items.forEach((elem) => {
  elem.addEventListener("click", () => {
    zoomImage(elem);
  });
});

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    body.classList.add("vertical");
  } else {
    body.classList.remove("vertical");
  }
}

function zoomImage(el) {
  el.classList.toggle("active");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleImages() {
  shuffleArray(imageLinks);

  for (let i = 0; i < images.length; i++) {
    images[i].src = imageLinks[i];
  }
}
