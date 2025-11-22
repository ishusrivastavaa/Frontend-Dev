// q9_form_validation.js
// Blocks submit with preventDefault and shows/removes errors live

const form = document.getElementById("user-form");

const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");

const nameErrorText = document.getElementById("name-error");
const emailErrorText = document.getElementById("email-error");
const passwordErrorText = document.getElementById("password-error");

const successMessage = document.getElementById("success-message");

function validateName() {
  const value = nameField.value.trim();
  if (!value) {
    nameErrorText.textContent = "Name is required.";
    return false;
  }
  nameErrorText.textContent = "";
  return true;
}

function validateEmail() {
  const value = emailField.value.trim();
  const isValid = value.includes("@"); // simple check
  if (!value || !isValid) {
    emailErrorText.textContent = "Valid email is required.";
    return false;
  }
  emailErrorText.textContent = "";
  return true;
}

function validatePassword() {
  const value = passwordField.value;
  if (value.length < 6) {
    passwordErrorText.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordErrorText.textContent = "";
  return true;
}

// Live correction: errors disappear automatically
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // block actual submission

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    successMessage.textContent = "Form Submitted Successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
