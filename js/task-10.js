function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
let boxesNumber = 0;
const boxesArr = [];
let boxSize = 20;

inputEl.addEventListener("change", handleInput);
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function handleInput(event) {
  boxesNumber = Number(event.currentTarget.value);
  boxesArr.length = boxesNumber;
  boxesArr.fill("", 0, boxesNumber);
}

function createBoxes() {
  const markup = boxesArr
    .map(() => {
      boxSize += 10;
      return `<div style="background-color: ${getRandomHexColor()};
        width: ${boxSize}px; height: ${boxSize}px; margin: 5px"></div>`;
    })
    .join("");

  containerEl.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  containerEl.innerHTML = "";
  boxSize = 20;
}
