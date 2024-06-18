
// navbar script
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


let formbtn = document.querySelector("#form-btn");
function loading(flag){
  (flag) ? (formbtn.innerHTML ="Send Message") : (formbtn.innerHTML = "Submitting.....");
}

// contact form

loading(true);
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var form = event.target;
  var formData = new FormData(form);
  var loadingBar = document.getElementById('loading-bar');

  // display loading bar
  loading(false);


  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {

    // hide laoding bar
    loading(true);


      if (response.ok) {
          // Hide the form and show the success message
          form.reset();
          var successMessage = document.getElementById('success-message');
          successMessage.style.display = 'grid';
          // Hide the success message after 2 seconds
          setTimeout(function() {
              successMessage.style.display = 'none';
          }, 2000);
      } else {
          return response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  alert(data["errors"].map(error => error["message"]).join(", "));
              } else {
                  alert("Oops! There was a problem submitting your form");
              }
          });
      }
  }).catch(error => {
      alert("Oops! There was a problem submitting your form");
  });
});





  
