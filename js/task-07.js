const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

const textSizeChanger = (event) => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener("input", textSizeChanger);
