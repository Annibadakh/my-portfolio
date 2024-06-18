let btn = document.querySelector("#menu-btn");
let nav = document.querySelector(".navbar");
let close = document.querySelector(".cross-btn");
const activenav = () => {
  nav.classList.add("active");
  close.classList.add("active");
}

const removenav = () => {
  nav.classList.remove("active");
  close.classList.remove("active");
}

btn.addEventListener("click",activenav);
window.addEventListener("scroll",removenav);
close.addEventListener("click",removenav);


// count increment functtion
document.addEventListener("DOMContentLoaded", function() {
  const count1 = document.getElementById('count1');
  const count2 = document.getElementById('count2');
  const count3 = document.getElementById('count3');
  const targetNum1 = 10;
  const targetNum2 = 500;
  const targetNum3 = 30;
  const duration = 1000; 

  countUp(count1, targetNum1, duration);
  countUp(count2, targetNum2, duration);
  countUp(count3, targetNum3, duration);
});

function countUp(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 100); // How much to increment by
  const interval = 100; // How often to update the number in milliseconds

  const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
          element.textContent = target;
          clearInterval(counter);
      } else {
          element.textContent = Math.ceil(start);
      }
  }, interval);
}