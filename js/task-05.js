const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const handleInput = (event) => {
  let inputText = event.currentTarget.value.trim();
  if (inputText.length === 0) {
    outputEl.textContent = "Anonymous";
    return;
  }
  outputEl.textContent = inputText;
};

inputEl.addEventListener("input", handleInput);
