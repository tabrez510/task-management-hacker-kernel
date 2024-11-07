function validateForm() {
  const errorMessages = document.getElementById("frontend-errors");
  errorMessages.innerHTML = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const mobilePattern = /^[0-9]{10}$/;

  let valid = true;

  if (!name.trim()) {
    valid = false;
    const nameError = document.createElement("li");
    nameError.textContent = "Name cannot be empty.";
    errorMessages.appendChild(nameError);
  }

  if (!emailPattern.test(email)) {
    valid = false;
    const emailError = document.createElement("li");
    emailError.textContent = "Please enter a valid email address.";
    errorMessages.appendChild(emailError);
  }

  if (!mobilePattern.test(mobile)) {
    valid = false;
    const mobileError = document.createElement("li");
    mobileError.textContent = "Please enter a valid 10-digit mobile number.";
    errorMessages.appendChild(mobileError);
  }

  return valid;
}
