// overall progress 3 seconds main hooni chahiye means aapka download 3 seconds main 100% tak jaana chahiye..

// sabse pehle hamien ye karna hai ke uss progress bar kii width barhti rahay 100 tak and saath hii usske neeche text main dikhaye ke kitne percent hogaya hai ab download and ye sab aapka 5s main hoona chhaiye

let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let time = 5
let count = 0;
let h2 = document.querySelector("h2")

let clear = setInterval(function () {
    if(count <=99)
    count++
    progress.style.width = `${count}%`
    percent.textContent = `${count}%`

    if(count === 100){
        h2.textContent = "Download Complete!"
        clearInterval(clear)
    }



}, (time*1000)/100);
