let count = 11

let h3 = document.querySelector('h3')

let si = setInterval(function () {
    if (count >= 1) {
        --count
        h3.textContent = count
    }
    else {
        clearInterval(si)
    }

}, 1000)