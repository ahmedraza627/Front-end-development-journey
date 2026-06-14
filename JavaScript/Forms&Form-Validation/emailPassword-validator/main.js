let form = document.querySelector('form')
let email = document.querySelector("#email")
let password = document.querySelector('#password')
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let error = document.querySelector('.error')

passwordError.style.display = "none"
passwordError.style.display = "none"

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value)
    let passwordAns = passwordRegex.test(password.value)

    if (!emailAns) {

        email.classList.add("emailError")
        emailError.style.display = "initial"
    }
    else {
        emailError.style.display = "none"
    }

    if (!passwordAns) {
        password.classList.add("passwordError")
        passwordError.style.display = "initial"
    }

    else {
        passwordError.style.display = "none"
    }
})