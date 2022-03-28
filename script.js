"use strict";

let text = document.getElementById("text");
let clouds2 = document.getElementById("clouds2");
let clouds3 = document.getElementById("clouds3");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");
let ocean = document.getElementById("ocean");
let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // text.style.top = 50 + value * 0.5 + "%";
  stars.style.left = value * 0.25 + "px";
  clouds2.style.left = value * 2 + "px";
  clouds3.style.left = value * -1.5 + "px";
  moon.style.top = value * 0.1 + "px";
});

// Create bubbles
// function createBubble() {
//   const section = document.querySelector(".sec");
//   const createElement = document.createElement("span");
//   let size = Math.random() * 60;

//   createElement.style.width = 20 + size + "px";
//   createElement.style.height = 20 + size + "px";
//   createElement.style.left = Math.random() * innerWidth + "px";
//   section.appendChild(createElement);
//   setTimeout(() => {
//     createElement.remove();
//   }, 4000);
// }

// setInterval(createBubble, 50);
