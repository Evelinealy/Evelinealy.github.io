const loader = document.querySelector(".loader");
const mainContent = document.querySelector(".main-content");

window.addEventListener("load", () => {
  loader.style.opacity = 0;
  loader.style.display = "none";
  mainContent.style.display = "block";
  setTimeout(() => (mainContent.style.opacity = 1), 50);
});

// const init = (() => {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     loader.style.display = "none";

//     mainContent.style.display = "block";
//     setTimeout(() => (mainContent.style.opacity = 1), 50);
//   }, 4000);
// })();
