const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function tiktak() {
  let second = new Date().getSeconds();
  let minute = new Date().getMinutes();
  let hour = new Date().getHours();
  sec.style.transform = `rotate(${second * 6}deg)`;
  min.style.transform = `rotate(${minute * 6}deg)`;
  hours.style.transform = `rotate(${(hour - 6) * 30}deg)`;
}

setInterval(tiktak, 1000);

// *******************************************************

const sec2 = document.querySelector(".secs2");
const min2 = document.querySelector(".mins2");
const hours2 = document.querySelector(".hours2");

function tiktak2() {
  let second2 = new Date().getSeconds();
  let minute2 = new Date().getMinutes();
  let hour2 = new Date().getHours();
  sec2.style.transform = `rotate(${second2 * 6}deg)`;
  min2.style.transform = `rotate(${minute2 * 6}deg)`;
  hours2.style.transform = `rotate(${(hour2 + 1) * 30}deg)`;
}

setInterval(tiktak2, 1000);

// ************************************************************

const sec3 = document.querySelector(".secs3");
const min3 = document.querySelector(".mins3");
const hours3 = document.querySelector(".hours3");

function tiktak3() {
  let second3 = new Date().getSeconds();
  let minute3 = new Date().getMinutes();
  let hour3 = new Date().getHours();
  sec3.style.transform = `rotate(${second3 * 6}deg)`;
  min3.style.transform = `rotate(${minute3 * 6}deg)`;
  hours3.style.transform = `rotate(${(hour3 + 7) * 30}deg)`;
}

setInterval(tiktak3, 1000);
