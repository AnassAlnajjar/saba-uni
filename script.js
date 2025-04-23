const scriptURL =
  "https://script.google.com/macros/s/AKfycbw91mwdhCVaVEBzYzCqoHdrGY2TyFMvlD5Oma-rLP5fxElD7jaai1w4ZUYS6P7yph3S/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});