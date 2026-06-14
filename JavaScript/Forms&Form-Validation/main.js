// form ke andar jab bhi banda 2 words ya usse kam likhe toh likha huya aajaye ke ye kam hain..

let form = document.querySelector('form')
let nm = document.querySelector("#name")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(nm.value.length <= 2){
        document.querySelector(".hide").style.display = "initial"
    }
    else{
        document.querySelector(".hide").style.display = "none"
    }



})