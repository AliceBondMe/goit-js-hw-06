const inputEl = document.querySelector("#validation-input");

const validationNumber = Number(inputEl.dataset.length);

const validateInput = (event) => {
  inputEl.classList.remove("invalid");

  if (event.currentTarget.value.length !== validationNumber) {
    inputEl.classList.add("invalid");
    return;
  }
  inputEl.classList.add("valid");
};

inputEl.addEventListener("blur", validateInput);
