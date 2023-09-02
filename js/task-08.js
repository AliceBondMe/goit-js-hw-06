const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
    return;
  }
  const loginObj = {
    email: email.value,
    password: password.value,
  };
  console.dir(loginObj);
  event.currentTarget.reset();
}
