const inputEmail = document.querySelector("#email")
const form = document.querySelector("#myForm")
const errorSpan = document.querySelector("#error")

form.addEventListener('submit',function(event) {
   event.preventDefault()

    const emailValue = inputEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (emailValue === '') {
    errorSpan.textContent = "Email is required"
   } else if (!emailPattern.test(emailValue)) {
    errorSpan.textContent = "Please provide a valid Email!"
   } else {
    errorSpan.textContent = ""
    alert("Email submitted successfully!")
    form.submit()
   }
})
