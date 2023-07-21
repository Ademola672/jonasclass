"use strict";
//selectint elements
const time = document.querySelector(".time");
const imageText = document.querySelector(".image-text");
//functions
const now = function () {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  time.textContent = `${hours}:${minutes}:${seconds}`;
  if (hours >= 12 && hours <= 17 && minutes === Number("00")) {
    imageText.textContent = "GOOD AFTERNOON!";
  } else if (hours >= 17 && hours <= 23 && minutes <= 59) {
    imageText.textContent = " GOOD EVENING";
  } else {
    imageText.textContent = " GOOD MORNING";
  }
};
setInterval(now, 1000);

//event handlers
