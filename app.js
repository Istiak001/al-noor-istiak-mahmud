var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var name = document.getElementById("name");
      var nameValue = name.value;
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        alert('Thanks for your submission!' +' '+ nameValue);
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


// Scrool To Top Button
function scroolToTop() {
    window.scrollTo({
        to:0,
        behavior: 'smooth'
    })
};