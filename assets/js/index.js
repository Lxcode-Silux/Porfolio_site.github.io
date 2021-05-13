const emailjs = require("emailjs-com");

const submitForm = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_atuirpb",
      "contact-form",
      "user_xnNYlJ9o1ZIrQ9GsJqXYa"
    )
    .then((result) =>
      alert("Your message has been sent. I will be in contact with you soon")
    )
    .catch((err) => alert("Oops! , Please try again"));
};

document.querySelector(".submitBtn").addEventListener("click", submit);
