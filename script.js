
// navbar script
let nav = document.querySelector(".navbar");
let closenav = document.querySelector(".cross-btn");
const activenav = () => {
  nav.classList.add("active");
  closenav.classList.add("active");
}

const removenav = () => {
  nav.classList.remove("active");
  closenav.classList.remove("active");
}

document.querySelector("#menu-btn").addEventListener("click",activenav);
window.addEventListener("scroll",removenav);
closenav.addEventListener("click",removenav);
// end

// count increment functtion
document.addEventListener("DOMContentLoaded", function() {
  const count1 = document.getElementsByClassName('count1');
  const count2 = document.getElementsByClassName('count2');
  const count3 = document.getElementsByClassName('count3');
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
  const increment = target / (duration / 100); 
  const interval = 100; 

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

// end


  
