let inp = document.querySelector('input')
let span = document.querySelector('span')
let small = document.querySelector('small')

inp.addEventListener('input', function (e) {
    let count = 20 - e.target.value.length

    span.innerText = count

    if (count < 0) {
        small.textContent = "Characters must contain only 20 words"
        small.style.color = 'white'

        span.style.color = "red"
    }
    else {
        span.style.color = "white"
    }



})
