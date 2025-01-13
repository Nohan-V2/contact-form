const $inputFirstName = document.querySelector("#first-name");

console.log($inputFirstName);

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Hello");

  $inputFirstName.focus();

  $inputFirstName.addEventListener("input", function (e) {
    console.log(e.target.value);

    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

    if (e.target.value.length === 0 || e.target.value.length < 2) {
      console.log("Ne peut pas être vide");
    } else {
      console.log("C'est bon");
    }
  });
});
