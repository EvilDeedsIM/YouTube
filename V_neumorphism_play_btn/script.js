const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const playBtn = document.querySelector(".circle__btn");
const wave1 = document.querySelector(".circle__back-1");
const wave2 = document.querySelector(".circle__back-2");

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pause.classList.toggle("visibility");
  play.classList.toggle("visibility");
  playBtn.classList.toggle("shadow");
  wave1.classList.toggle("paused");
  wave2.classList.toggle("paused");
});
