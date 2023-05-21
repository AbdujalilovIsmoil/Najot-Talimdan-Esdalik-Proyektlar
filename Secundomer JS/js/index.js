"use strict"

// Timer
const startBtn = document.querySelector("[data-start]"),
  stopBtn = document.querySelector("[data-stop]"),
  resetBtn = document.querySelector("[data-reset]");

let hour = document.querySelector(".hour"),
  minute = document.querySelector(".minute"),
  second = document.querySelector(".second"),
  milliSecund = document.querySelector(".milli-secund");

let index = 0;
let secundValue = 0;
let minuteValue = 0;
let hourValue = 0;

startBtn.addEventListener("click", () => {
  let interval = setInterval(() => {
    index++;
    if (index === 100) {
      secundValue++;
      index = 0;
    }

    if (secundValue == 60) {
      minuteValue++;
      secundValue = 0;
    }

    if (minuteValue == 60) {
      hourValue++;
      minuteValue = 0;
    }

    if (index < 10) {
      index = "0" + index;
    }

    milliSecund.innerHTML = index;
    second.innerHTML = secundValue < 10 ? `0${secundValue}` : secundValue;
    minute.innerHTML = minuteValue < 10 ? `0${minuteValue}` : minuteValue;
    hour.innerHTML = hourValue < 10 ? `0${hourValue}` : hourValue;
  },10);

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    index = 0;
    secundValue = 0;
    minuteValue = 0;
    hourValue = 0;
    milliSecund.innerHTML = '00';
    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';
  });
});