// Separation of Concerns (DOM Vs Logic)

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(num1, num2) {
  return num1 + num2;
}

btn.addEventListener("click", function () {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const sum = add(num1, num2);

  const li = document.createElement("li");
  li.textContent = sum;
  ul.appendChild(li);
});
