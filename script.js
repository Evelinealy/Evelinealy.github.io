const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  const telnum1 = document.querySelector(".tel1").value;
  const telnum2 = document.querySelector(".tel2").value;
  const telnum3 = document.querySelector(".tel3").value;
  const body =
    "Name: " +
    name +
    "<br/> Email: " +
    email +
    "<br/> Number: " +
    telnum1 +
    "-" +
    telnum2 +
    "-" +
    telnum3 +
    "<br/> Message: " +
    msg;

  Email.send({
    SecureToken: "ef850069-2ab9-4747-8186-50daadaea980",
    To: "alyga.careers@gmail.com",
    From: email,
    Subject: "Portfolio Contact Inquiry",
    Body: body,
  }).then((message) =>
    alert(
      "Thank you for your inquiry! The message was sent successfully. I will reach out to you soon!"
    )
  );

  form.reset();
});
