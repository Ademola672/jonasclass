"use strict";
const body = document.querySelector(".body");
const image = document.querySelectorAll(".image");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
console.log(image);

const colorchg = function () {
  body.style.backgroundColor = "#bc986a";
};

body.addEventListener("click", function () {
  colorchg();
});

for (let i = 0; i < image.length; i++) {
  (function () {
    image[i].addEventListener("mouseover", function () {
      image[i].style.borderRadius = "3rem";
      image[i].style.height = "14rem";
    });
  })();

  image[i].addEventListener("mouseout", function () {
    image[i].style.borderRadius = "";
    image[i].style.height = "";
  });
}

// image.addEventListener("click", function () {
//   picf();
// });
