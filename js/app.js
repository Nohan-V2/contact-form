const $inputFirstName = document.querySelector("#first-name");

console.log($inputFirstName);

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Hello");

  $inputFirstName.focus();

  $inputFirstName.addEventListener("input", function (e) {
    console.log(e.target.value);

    firstName = e.target.value.replace(/[^a-zA-Z\s]/g, "");

    if (firstName.length === 0 || firstName.length < 2) {
      console.log("Ne peut pas être vide");
    } else {
      console.log("C'est bon");
    }
  });
});
