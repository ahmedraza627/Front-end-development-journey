// let sel = document.querySelector('select')
// let device = document.querySelector('h2')

// sel.addEventListener('change', function (e) {
//     device.textContent = `${e.target.value} Device Selected`

// })

let fileinp = document.querySelector("#fileinp");
let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    fileinp.click();
})

fileinp.addEventListener('change', function (e) {
    const files = e.target.files[0]

    if(files){
        btn.textContent = files.name
    }
    
    // btn.textContent = btn.  //srcElement.files[0]


})

