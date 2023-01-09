// ==== Typing Animation ====
var typed = new Typed(".typing", {
  strings: [
    "Software Enthusiast",
    "Cybersecurity Enthusiast",
    "Computer Science Major",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// ==== Sticky for Header ====
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
