// q3_multistep_form.js
// Simple 3-step form with validation before moving forward

const steps = [
  document.getElementById("step-1"),
  document.getElementById("step-2"),
  document.getElementById("step-3")
];

let currentStepIndex = 0;

const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const summaryContainer = document.getElementById("summary");

// Inputs and error areas
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Finish" : "Next";
}

// Validate current step before moving forward
function validateCurrentStep() {
  if (currentStepIndex === 0) {
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
      return false;
    }
    nameError.textContent = "";
  }

  if (currentStepIndex === 1) {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email.";
      return false;
    }
    emailError.textContent = "";
  }

  if (currentStepIndex === 2) {
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      return false;
    }
    passwordError.textContent = "";
  }

  return true;
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
    showStep(currentStepIndex);
  } else {
    // All steps complete → show summary
    summaryContainer.innerHTML = `
      <h3>Summary</h3>
      <p><strong>Name:</strong> ${nameInput.value}</p>
      <p><strong>Email:</strong> ${emailInput.value}</p>
      <p><strong>Password:</strong> ${"*".repeat(passwordInput.value.length)}</p>
    `;
  }
});

backButton.addEventListener("click", () => {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    showStep(currentStepIndex);
  }
});
