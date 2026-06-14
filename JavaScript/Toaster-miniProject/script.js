const parent = document.querySelector(".parent");

function createToaster(config){
    return function(msg){
        const div = document.createElement("div")
        div.textContent = msg
        div.classList.add("toast")
        parent.appendChild(div)

        setTimeout(() =>{
        div.remove();
        },config.duration * 1000)
    }
}

const toaster = createToaster({duration : 3})
toaster("A")

setTimeout(() => {
    toaster("B")
}, 1000);

setTimeout(() => {
    toaster("C")
}, 1500);