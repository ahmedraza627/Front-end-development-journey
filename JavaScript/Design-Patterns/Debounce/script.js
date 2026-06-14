// Debounce Concept...
const users = ["Ahmed", "Ali", "Ayan", "Bilal", "Usman", "Hamza"];

let input = document.querySelector("input");

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    console.log("Timer Created");
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Function Executed!");

      fnc(...args);
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(function (e) {
    console.log("Searching for:", e.target.value);
  }, 1000),
);
