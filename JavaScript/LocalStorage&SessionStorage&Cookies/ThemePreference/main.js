/// Hamien karna ye hai ke website starting main light theme par hoo and aik button hoo toggle kaa jispar hum click karien toh ye theme ko change karde foran se and localstorage yaad rakhay ke ab konsi theme hai and jab kabhi bhi hum wapsi woh website khole toh localstorage main jo bhi theme saved hoo woh apply hoojaye..

let toggleTheme = document.querySelector("#toggleTheme");
let body = document.body;
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;
} else {
    body.className = "light"; // default
}

toggleTheme.addEventListener("click", function () {

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

});