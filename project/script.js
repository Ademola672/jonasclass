"use strict";
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const sub = document.querySelectorAll(".btn-open");
console.log(sub);

const openModal = function () {
  modal.classList.remove("toggle");
  overlay.classList.remove("toggle");
};

const closeModal = function () {
  modal.classList.add("toggle");
  overlay.classList.add("toggle");
};

for (let i = 0; i < sub.length; i++)
  sub[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("toggle")) {
    closeModal();
  }
});
