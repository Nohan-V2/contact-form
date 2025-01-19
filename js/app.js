const $inputFirstName = document.querySelector("#first-name");
const $firstNamerError = document.querySelector(".first-name-error");
const $inputLastName = document.querySelector("#last-name");
const $lastNameError = document.querySelector(".last-name-error");
const $inputEmail = document.querySelector("#email");
const $emailError = document.querySelector(".email-error");
const $firstRadioButton = document.querySelector("#general-enquiry");
const $secondRadioButton = document.querySelector("#support-request");
const $radioError = document.querySelector(".radio-error");
const $inputMessage = document.querySelector("#message");
const $messageError = document.querySelector(".message-error");
const $inputCheckbox = document.querySelector("#terms-and-conditions");
const $checkboxError = document.querySelector(".checkbox-error");
const $submitButton = document.querySelector("#button");

const $successMessage = document.querySelector(".success-message");

console.log($inputFirstName);
console.log($inputLastName);
console.log($inputEmail);
console.log($firstRadioButton);
console.log($secondRadioButton);
console.log($inputMessage);
console.log($inputCheckbox);
console.log($submitButton);

console.log("########################################");

console.log($firstNamerError);
console.log($lastNameError);
console.log($emailError);
console.log($radioError);
console.log($messageError);
console.log($checkboxError);

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Hello");

  $inputFirstName.focus();
});

$submitButton.addEventListener("click", function (e) {
  let isValid = true;
  e.preventDefault();

  if ($inputFirstName.value.length === 0 || $inputFirstName.value.length < 2) {
    $firstNamerError.classList.remove("hidden");

    isValid = false;
  } else {
    $firstNamerError.classList.add("hidden");
  }

  if ($inputLastName.value.length === 0 || $inputLastName.length < 2) {
    $lastNameError.classList.remove("hidden");

    isValid = false;
  } else {
    $lastNameError.classList.add("hidden");
  }

  if (
    $inputEmail.value.length === 0 ||
    $inputEmail.value.length < 2 ||
    $inputEmail.value.includes("@") === false
  ) {
    $emailError.classList.remove("hidden");

    isValid = false;
  } else {
    $emailError.classList.add("hidden");
  }

  if (
    $firstRadioButton.checked === false &&
    $secondRadioButton.checked === false
  ) {
    $radioError.classList.remove("hidden");

    isValid = false;
  } else {
    $radioError.classList.add("hidden");
  }

  if ($inputMessage.value.length === 0 || $inputMessage.value.length < 2) {
    $messageError.classList.remove("hidden");

    isValid = false;
  } else {
    $messageError.classList.add("hidden");
  }

  if ($inputCheckbox.checked === false) {
    $checkboxError.classList.remove("hidden");

    isValid = false;
  } else {
    $checkboxError.classList.add("hidden");
  }

  console.log($inputFirstName.value);
  console.log($inputLastName.value);
  console.log($inputEmail.value);
  console.log($firstRadioButton.checked);
  console.log($secondRadioButton.checked);
  console.log($inputMessage.value);
  console.log($inputCheckbox.checked);
  console.log($submitButton.value);

  if (isValid) {
    $successMessage.classList.remove("hidden");

    return true;
  } else {
    $successMessage.classList.add("hidden");

    return false;
  }
});
