const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const allInputs = document.querySelectorAll("input");
const allErrorDivs = document.querySelectorAll(".error");

let allUsersData =
  JSON.parse(localStorage.getItem("usersData")) == null
    ? []
    : JSON.parse(localStorage.getItem("usersData"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

  let userObj = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  userObj.username = allInputs[0].value;
  userObj.email = allInputs[1].value;
  userObj.password = allInputs[2].value;
  userObj.password2 = allInputs[3].value;

  allUsersData.some((q) => q.email === allInputs[0].value) ||
  allUsersData.some((q) => q.username === allInputs[2].value)
    ? null
    : allUsersData.push(userObj);

  localStorage.setItem("usersData", JSON.stringify(allUsersData));

  allInputs.forEach((input) => (input.value = ""));
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
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

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

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
