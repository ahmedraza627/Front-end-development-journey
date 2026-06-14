// Avoiding Unnecessary reflows and repaint..

const ul = document.querySelector("ul");

const space = document.createDocumentFragment();

for (let i = 0; i <= 1000; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li)
}

ul.appendChild(space)