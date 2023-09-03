function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

const min = Number(inputEl.min);
const max = Number(inputEl.max);
const step = Number(inputEl.step);

let boxesNumber = 0;

inputEl.addEventListener("change", handleInput);
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function handleInput(event) {
  boxesNumber = Number(event.currentTarget.value);
}

function createBoxes() {
  if (boxesNumber < min || boxesNumber > max) {
    return alert(`You must enter valid number! Min is ${min}, max is ${max}`);
  }
  let boxSize = 30;
  let markup = "";
  for (let i = min; i <= boxesNumber; i += step) {
    markup += `<div style="background-color: ${getRandomHexColor()};
        width: ${boxSize}px; height: ${boxSize}px; margin: 5px"></div>`;
    boxSize += 10;
  }

  containerEl.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes(event) {
  containerEl.innerHTML = "";
  inputEl.value = 0;
  boxesNumber = 0;
}

// const boxesArr = [];

// function handleInput(event) {
//   boxesNumber = Number(event.currentTarget.value);
//   boxesArr.length = boxesNumber;
//   boxesArr.fill("", 0, boxesNumber);
// }

// function createBoxes() {
//   const markup = boxesArr
//     .map(() => {
//       boxSize += 10;
//       return `<div style="background-color: ${getRandomHexColor()};
//         width: ${boxSize}px; height: ${boxSize}px; margin: 5px"></div>`;
//     })
//     .join("");

//   containerEl.insertAdjacentHTML("beforeend", markup);
// }

// function destroyBoxes() {
//   containerEl.innerHTML = "";
//   boxSize = 20;
// }
