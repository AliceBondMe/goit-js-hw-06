const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

const textSizeChanger = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

textSizeChanger();

inputEl.addEventListener("input", textSizeChanger);
