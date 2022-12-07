let emailSignIn = document.querySelector("#email");
let passwordSignIn = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateInputs();
  if (emailSignIn.value !== "" || passwordSignIn.value !== "") {
    let allUsersArray = JSON.parse(localStorage.getItem("usersData"));
    allUsersArray.some(
      (q) =>
        q.email === emailSignIn.value && q.password === passwordSignIn.value
    )
      ? (window.location.href = "home.html")
      : alert("email or password wrong!!"),
      (window.location.href = "singup.html");

    email.value = "";
    password.value = "";
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};
