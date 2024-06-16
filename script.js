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