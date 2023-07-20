"use strict";
const body = document.querySelector(".body");
const images = document.querySelectorAll(".image");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
console.log(images);

const colorchg = function () {
  body.style.backgroundColor = "#bc986a";
};

body.addEventListener("click", function () {
  colorchg();
});

images.forEach((image) => {
  image.addEventListener("mouseover", function () {
    image.style.borderRadius = "3rem";
    image.style.height = "14rem";
  });

  image.addEventListener("mouseout", function () {
    image.style.borderRadius = "";
    image.style.height = "";
  });
});
