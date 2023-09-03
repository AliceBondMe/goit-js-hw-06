const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All fields must be filled! Space doesn`t count");
  }
  const loginObj = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.dir(loginObj);
  event.currentTarget.reset();
}
