function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}
