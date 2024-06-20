function contact_form(event) {
  event.preventDefault(); // Prevent the default form submission

  var form = event.target;
  var formData = new FormData(form);
  let loader = document.querySelector("#loader");

  // display loading bar
  loader.style.display ="grid";

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {

    // hide laoding bar
      loader.style.display ="none";

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
}
document.querySelector('#contact-form2').addEventListener('submit', contact_form);