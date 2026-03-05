const scriptURL =
  "https://script.google.com/macros/s/AKfycbw6VBUnuLAX9rwb2AIhe69GtPdU0vYKHXnQBpzuriybGLBDqPQ1BnQmqurgXTLr8JPLiQ/exec"; // Replace with your actual URL
const form = document.querySelector(".form");
const btn = form.querySelector(".form__button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // UI Feedback: Disable button and show progress
  btn.disabled = true;
  btn.innerHTML = "Sending...";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      form.innerHTML =
        "<h3>Thank you!</h3><p>A Hanover specialist will contact you shortly.</p>";
      form.classList.add("form--success");
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
      btn.disabled = false;
      btn.innerHTML = "Send";
    });
});
